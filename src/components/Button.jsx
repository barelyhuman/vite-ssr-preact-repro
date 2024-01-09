import { Button as AButton } from "react-aria-components";
import "./Button.css"

export default function Button({ onPress, children }) {
  return <AButton onPress={onPress}>{children}</AButton>;
}
