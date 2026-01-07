import { Image } from "primereact/image";
import { Button } from "primereact/button";

export default function Welcome() {
  return (
    <div className="flex flex-wrap items-center justify-center mb-4">
      <Image alt="big wow" src="/favicon/favicon.svg" width="512" height="512" />
      <div>
        <Button icon="pi pi-plus" label="new list" />
      </div>
    </div>
    );
}