import React, { useState } from "react";
import { useSelector } from "react-redux";

import { SearchBar } from "../SearchBar";
import { search } from "./assessmentSlice";
import { BehaviorAnchorDisplay } from "./BehavioralAnchor";

export function Assessments() {
  const [searchText, setSearchText] = useState("");

  const assessmentItems = useSelector(search(searchText));

  let items = null;
  if (assessmentItems.length > 0) {
    items = assessmentItems.map((a, idx) => (
      // @ts-ignore
      <BehaviorAnchorDisplay
        key={a.question}
        question={a.question}
        discussion={a.discussion}
        competencies={a.competencies}
        tks={a.tks}
        behavioralAnchors={a.behavioralAnchors}
        likes={a.likes}
      ></BehaviorAnchorDisplay>
    ));
  }

  return (
    <div>
      <SearchBar searchTerm={searchText} onUpdate={setSearchText}></SearchBar>
      {items}
    </div>
  );
}
