import React from "react";
import { Combobox } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Searchbox({
  selected,
  setSelected,
  icon,
  setQuery,
  filtered,
  label,
  bottomBorder = false,
}) {
  return (
    <Combobox as="div" value={selected} onChange={setSelected}>
      <Combobox.Label className="block pb-2 text-sm font-normal text-gray-700">
        <FontAwesomeIcon className="text-green-600 mr-2" icon={icon} />
        {label}
      </Combobox.Label>
      <div className="relative">
        <Combobox.Input
          autoComplete="off"
          className={`w-full border-gray-300 bg-white py-2 pl-3 pr-10 focus:border-green-500 focus:ring-0 focus:outline-none sm:text-sm ${
            bottomBorder ? "border-0 border-b" : "rounded-md border"
          }`}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          {bottomBorder || (
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-green-500"
              aria-hidden="true"
            />
          )}
        </Combobox.Button>

        {filtered.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filtered.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-green-500 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {person.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-green-500"
                        )}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
