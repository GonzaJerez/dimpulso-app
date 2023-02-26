import renderer from "react-test-renderer";
import { SimpleText } from "../SimpleText";

import { ThemeContext } from "../../../context/theme/ThemeContext";

describe("<SimpleText />", () => {
  it("should be render successfully", () => {
    const component = renderer
      .create(
        <ThemeContext.Provider value={{ theme: { colors: { text: "black" } } }}>
          <SimpleText>Hola</SimpleText>
        </ThemeContext.Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should be render successfully with custom styles", () => {
    const component = renderer
      .create(
        <ThemeContext.Provider value={{ theme: { colors: { text: "black" } } }}>
          <SimpleText style={{ marginTop: 50 }}>Hola</SimpleText>
        </ThemeContext.Provider>
      )
      .toJSON();

    expect(component.props.style.marginTop).toBe(50);
  });
});
