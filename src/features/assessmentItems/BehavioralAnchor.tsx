import React, { useState } from "react";

type BehavioralAnchorDisplayProps = {
  key: string;
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
function BehaviorAnchorDisplay(props: BehavioralAnchorDisplayProps) {
  const {
    key,
    question,
    discussion,
    competencies,
    tks,
    behavioralAnchors,
    likes,
  } = props;

  const tags = competencies
    .map((c) => (
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
        {c}
      </span>
    ))
    .concat(
      tks.map((tk) => (
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1">
          {tk}
        </span>
      ))
    );
  const approved = question.includes("cloud");
  const [hidden, setHiddenStatus] = useState(true);
  return (
    <div
      key={key}
      className="my-6 p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md items-center"
    >
      <div className="flex space-x-4">
        <div className="space-y-1">
          <div className="text-xl font-medium text-black relative">
            <span className="mr-20 block">{question}</span>

            {approved && (
              <button
                className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-xs ml-2 mb-1 p-1 rounded absolute top-0 right-12 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
              >
                &#9733;
              </button>
            )}

            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs ml-2 mb-1 p-1 rounded absolute top-0 right-0 shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              {likes} &hearts;
            </button>
          </div>

          <p className="text-gray-500">{discussion}</p>
          {tags}
        </div>
      </div>
      <div className="py-4">
        <button
          className="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          onClick={(e) => {
            e.preventDefault();
            setHiddenStatus(!hidden);
          }}
        >
          Behavioral Anchors
        </button>
        <div
          hidden={hidden}
          className="py-5 my-5 rounded-xl mx-auto min-w-full max-w-full overflow-hidden bg-gradient-to-r from-green-50 to-green-100 p-10"
        >
          <table className="table-fixed">
            <tr>
              <th className="w-1/4 px-4 py-2 text-green-600 text-sm">
                Rating Combinations
              </th>
              <th className="w-1/4 px-4 py-2 text-green-600 text-sm">Anchor</th>
              <th className="w-1/2 px-4 py-2 text-green-600 text-sm">
                Discussion and Follow-ups
              </th>
            </tr>
            {behavioralAnchors.map((ba, idx) => (
              <tr key={ba.anchor + idx}>
                <td className="border border-green-500 px-3 py-2 text-green-600 text-xs">
                  {approved && ba.ratingCombination === "GS9" && (
                    <button
                      className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-xs mr-1  p-1 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                    >
                      &#9733;
                    </button>
                  )}
                  {ba.ratingCombination}
                </td>
                <td className="border border-green-500 px-3 py-2 text-green-600 text-xs">
                  {ba.anchor}
                </td>
                <td className="border border-green-500 px-3 py-2 text-green-600 text-xs">
                  {ba.discussion}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
export { BehaviorAnchorDisplay };
