import CodeHighlighter from "~/components/examples/CodeHighlighter";
import InfoContainer from "../../components/examples/InfoContainer";
import { infoContainerString } from "~/utils/constants/codeStrings";

const Examples = () => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full">
      <div className="flex flex-col my-4">
        <InfoContainer
          type="success"
          text={
            "Please note that some components coming with Lunar UI beta only support Vue 3 / Nuxt. The React version is set to be released soon. Subscribe to get notified when its out."
          }
        />

        <CodeHighlighter
          codeString={infoContainerString}
          title="Info Container"
        />
      </div>
    </div>
  );
};

export default Examples;
