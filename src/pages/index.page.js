import { signal } from "@preact/signals";
import Button from "../components/Button";
const count = signal(0);

export default function Page() {
  return <Button onPress={() => (count.value += 1)}>{count}</Button>;
}
