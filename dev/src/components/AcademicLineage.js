import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import lineage from '../data/academicLineage.json';

function AcademicLineage() {
  const [isOpen, setIsOpen] = useState(false);
  const [destinationId, setDestinationId] = useState(74313);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);
  const destination = lineage.destinations.find((person) => person.id === destinationId);

  useEffect(() => {
    if (!isOpen) return undefined;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeDialog = () => dialogRef.current.close();

  return (
    <>
      <button ref={triggerRef} type="button" onClick={() => setIsOpen(true)} aria-haspopup="dialog" className="text-link mt-2 inline-flex items-center gap-2 text-sm">
        Explore my academic lineage <span aria-hidden="true">↗</span>
      </button>
      {createPortal(
        <dialog
          ref={dialogRef}
          aria-labelledby="lineage-title"
          aria-describedby="lineage-description"
          className="lineage-dialog"
          onClose={() => {
            setIsOpen(false);
            triggerRef.current?.focus();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
        >
          {isOpen && (
            <>
              <div className="shrink-0 border-b border-slate-200 px-5 py-5 sm:px-8">
                <div className="flex items-start justify-between gap-4">
                  <h2 id="lineage-title" className="section-title">Academic lineage</h2>
                  <button type="button" autoFocus onClick={closeDialog} aria-label="Close academic lineage" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200">
                    <FaTimes aria-hidden="true" />
                  </button>
                </div>
                <p id="lineage-description" className="body-copy mt-2">
                  Recorded paths through my advisor, Prem Devanbu. Older connections
                  include teaching, correspondence, and influence as well as formal advising.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <label htmlFor="lineage-destination" className="text-sm text-slate-600">Trace a path to</label>
                  <select
                    id="lineage-destination"
                    value={destinationId}
                    onChange={(event) => {
                      setDestinationId(Number(event.target.value));
                      if (scrollRef.current) scrollRef.current.scrollTop = 0;
                    }}
                    className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                  >
                    {lineage.destinations.map((person) => <option key={person.id} value={person.id}>{person.name}</option>)}
                  </select>
                </div>
              </div>

              <div ref={scrollRef} className="min-h-0 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8">
                <p className="meta-label mb-5">
                  {destination.path.length - 1} connections · Expand a name for its sources.
                </p>
                <ol key={destinationId} className="ml-3 border-l border-slate-300">
                  {destination.path.map((id, index) => {
                    const person = lineage.people[id];
                    const nextId = destination.path[index + 1];
                    const connection = lineage.connections[`${id}:${nextId}`];
                    return (
                      <li key={id} className="relative pb-5 pl-7 last:pb-0">
                        <span aria-hidden="true" className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-[10px] text-slate-500">{index}</span>
                        <details className="lineage-step">
                          <summary className="flex cursor-pointer items-start justify-between gap-3 rounded-sm">
                            <span>
                              <span className="entry-title block">{person.name}</span>
                              <span className="meta-label mt-1 block">{person.education.join(' · ')}</span>
                            </span>
                            <FaChevronDown aria-hidden="true" className="lineage-chevron mt-2 shrink-0 text-[10px] text-slate-400 transition-transform" />
                          </summary>
                          <div className="body-copy mt-3 rounded bg-slate-50 p-3">
                            {connection && (
                              <>
                                <p className="font-medium">{connection.kind}</p>
                                <p className="meta-label mt-1">{person.name} → {lineage.people[nextId].name}</p>
                                <p className="mt-2 text-slate-600">{connection.note}</p>
                              </>
                            )}
                            {person.source && <a href={person.source} target="_blank" rel="noopener noreferrer" className="text-link mt-2 block underline underline-offset-4">View genealogy record</a>}
                            {connection?.sources.filter((source) => source.url !== person.source).map((source) => (
                              <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="text-link mt-2 block underline underline-offset-4">{source.title}</a>
                            ))}
                          </div>
                        </details>
                      </li>
                    );
                  })}
                </ol>
                <p className="meta-label mt-7">
                  Sources compiled {lineage.sourceDate}. These are recorded paths, with
                  the evidence and relationship type noted at each step.
                </p>
              </div>
            </>
          )}
        </dialog>,
        document.body
      )}
    </>
  );
}

export default AcademicLineage;
