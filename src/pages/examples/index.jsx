import InfoContainer from "../../components/examples/InfoContainer";

const Examples = () => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full">
      <h1 className="font-bold">Examples</h1>
      <div className="flex flex-col my-4 gap-4">
        <InfoContainer
          type="info"
          text={
            "Please note that some components coming with Lunar UI beta only support Vue 3 / Nuxt. The React version is set to be released soon. Subscribe to get notified when its out."
          }
        />
      </div>
    </div>
  );
};

export default Examples;
