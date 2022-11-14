import Classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={Classes.container}>
      <p className={Classes.titleStyle}>- CSS Modules -</p>
      <button className={Classes.buttonStyle}>FUGHT!!</button>
    </div>
  );
};
