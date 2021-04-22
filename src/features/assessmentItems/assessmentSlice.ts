import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}
export interface AssessmentItemsState {
  items: AssessmentItem[];
}

type AssessmentItem = {
  question: string;
  discussion: string;
  competencies: string[];
  tks: string[];
  likes: number;
  behavioralAnchors: {
    anchor: string;
    discussion: string;
    ratingCombination: string;
  }[];
};
const exampleComp1: AssessmentItem = {
  question: "What is the cloud",
  discussion:
    "Looking for high level, not too in-the-weed descriptions. Possible framing and follow up questions",
  competencies: [
    "stakeholder management",
    "communication",
    "software architecture",
    "modern architecture",
  ],
  tks: [],
  likes: 10,
  behavioralAnchors: [
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
  ],
};
const exampleComp2: AssessmentItem = {
  question: "What is run length encoding?",
  discussion:
    "Looking for a walk through of how to write an algorithm. Possible framing and follow up questions",
  competencies: ["software engineering"],
  tks: ["programming", "algorithm design"],
  likes: 5,
  behavioralAnchors: [
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
  ],
};

const exampleComp3: AssessmentItem = {
  question:
    "What is an example of a complex frontend you have built in react.js?",
  discussion:
    "Applicant should be able to explain the tradeoffs of why certain decisions were made. Possible framing and follow up questions",
  competencies: [
    "communication",
    "software architecture",
    "software engineering",
  ],
  tks: ["programming", "javascript"],
  likes: 30,
  behavioralAnchors: [
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
  ],
};
const exampleComp4: AssessmentItem = {
  question:
    "What is an example of a complex backend you have built in node.js?",
  discussion:
    "Applicant should be able to explain the tradeoffs of why certain decisions were made. Possible framing and follow up questions",
  likes: 22,

  competencies: [
    "communication",
    "software architecture",
    "software engineering",
  ],
  tks: ["programming", "javascript"],
  behavioralAnchors: [
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
  ],
};

const exampleComp5: AssessmentItem = {
  question:
    "What is an example of a complex data pipeline you have built using node.js?",
  discussion:
    "Applicant should be able to explain the tradeoffs of why certain decisions were made. Possible framing and follow up questions",
  competencies: [
    "communication",
    "software architecture",
    "software engineering",
    "data science",
  ],
  tks: ["programming", "javascript", "node.js"],
  likes: 2,
  behavioralAnchors: [
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS13 - GS15",
    },
    {
      anchor: "Familiar",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Experienced",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
    {
      anchor: "Master",
      discussion:
        "Example discussion of the behavioral anchor and what sort of answers you would expect from this rating and level",
      ratingCombination: "GS9",
    },
  ],
};
const initialState: AssessmentItemsState = {
  items: [
    exampleComp1,
    exampleComp2,
    exampleComp3,
    exampleComp4,
    exampleComp5,
  ].sort((a, b) => b.likes - a.likes),
};
export const counterSlice = createSlice({
  name: "assessmentItems",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

// export const {} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAll = (state: RootState) => state.assessmentItems.items;
export const search = (searchText: string) => (state: RootState) => {
  if (searchText.length === 0) {
    return selectAll(state);
  }
  const searchTextLower = searchText.toLocaleLowerCase();
  return selectAll(state)
    .filter((a: AssessmentItem) => {
      if (a.question.toLocaleLowerCase().includes(searchTextLower)) {
        return true;
      }
      for (const comp of a.competencies) {
        if (comp.toLocaleLowerCase().includes(searchTextLower)) {
          return true;
        }
      }
      for (const ksa of a.tks) {
        if (ksa.toLocaleLowerCase().includes(searchTextLower)) {
          return true;
        }
      }
      return false;
    })
    .sort((a, b) => b.likes - a.likes);
};
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default counterSlice.reducer;
