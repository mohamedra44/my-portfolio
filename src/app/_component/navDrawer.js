import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ListCollapse } from "lucide-react";
import Links from "./links";

export function NavDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={"xl:hidden bg-second border-none w-12.5"}
        >
          <ListCollapse strokeWidth={3} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <p className="text-center text-4xl font-black bg-primary w-full h-full text-white px-2 py-2 rounded-sm">
              List
            </p>
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="h-full flex flex-col justify-evenly items-center bg-primary text-white text-4xl">
          {" "}
          <Links
            LinksName={[
              "Home",
              "About",
              "Service",
              "Resume",
              "Project",
              "Contact",
            ]}
          />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className={"border-black text-2xl bg-second text-white"}
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
