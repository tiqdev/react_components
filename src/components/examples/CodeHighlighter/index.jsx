import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BsClipboard } from "react-icons/bs";
import propTypes from "prop-types";
import { toast } from "sonner";

const CodeHighlighter = ({ codeString, title }) => {
  return (
    <div className="my-4">
      <div className="w-full h-10 flex flex-row justify-between items-center bg-black-950 px-4 rounded-t-xl text-woodsmoke-300 font-bold">
        <h1>{`${title} Example`}</h1>
        <button
          className="inline-flex flex-row gap-2 h-5 items-center justify-center"
          onClick={() => {
            navigator.clipboard.writeText(codeString);
            toast.success("Code Copied!");
            //toast message
          }}
        >
          <BsClipboard className="w-4 h-[18px]" />
          <span className="text-sm">Copy Code</span>
        </button>
      </div>

      <SyntaxHighlighter
        language="jsx"
        style={atomOneDark}
        customStyle={{ padding: 20, fontSize: 14 }}
        className="rounded-b-xl max-w-[1200px] p-4"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;

CodeHighlighter.propTypes = {
  codeString: propTypes.string,
  title: propTypes.string,
};
