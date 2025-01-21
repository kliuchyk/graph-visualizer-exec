import React from "react";
import { Header, Paper } from "./ui";

export function Sidebar() {
  return (
    <Paper className="mr-8 max-w-[385px]">
      <Header as="h3" color="text-green-600">
        Description
      </Header>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit
        modi similique deleniti quo illo. Non architecto laborum adipisci
        aliquid iure nam reiciendis itaque recusandae soluta, debitis, esse
        eaque molestiae!
      </p>
    </Paper>
  );
}
