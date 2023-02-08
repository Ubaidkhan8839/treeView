import React, { useState } from "react";
import Treeview from "@mui/lab/TreeView";
import Treeitem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRighticon from "@mui/icons-material/ChevronRight";
import { Typography, Box, Stack } from "@mui/material";
// import Muiportal from "./muiportal"
// import Muislider from "./muislider"
// import Muistepper from "./muistepper"
// import Muimodal from "./Muimodal"
import About from "./About";

const ShowTreeComponent = (props) => {
  const { children, activeTree, selectedTree } = props;
  return (
    <div hidden={activeTree !== selectedTree}>
      {activeTree === selectedTree && <Box mx={2}>{children}</Box>}{" "}
    </div>
  );
};
const Tree = () => {
  const [activeTree, setActiveTree] = useState();
  const treeheading = ["slider", "portal", "stepper", "modal"];
  const treesubheading = [
    "slider one",
    "portal one",
    "stepper one",
    "modal one",
  ];
  const treemultiheading = [
    "slider two",
    "portal two",
    "stepper two",
    "modal two",
  ];
  const handleSelect = (event, selectedTree) => {
    setActiveTree(selectedTree);
  };
  return (
    <>
      <Box  display='flex'>
        <Typography variant="h5" color="secondary" align="center">
          Tree
        </Typography>
        <Stack spacing={3} direction="row">
          <Box width="20%">
            <Treeview
              defaultExpansicon={<ExpandMoreIcon />}
              defaultCollapseIcon={<ChevronRighticon />}
              onNodeSelect={handleSelect}
            >
              {treeheading.map((treeitem, index) => (
                <Treeitem nodeId={index} label={treeitem}>
                  <Treeitem
                    nodeId={treesubheading[index]}
                    label={treesubheading[index]}
                  >
                    {" "}
                    <Treeitem
                      nodeId={treemultiheading[index]}
                      label={treemultiheading[index]}
                    ></Treeitem>
                  </Treeitem>
                </Treeitem>
              ))}
            </Treeview>
          </Box>
        </Stack>
        <Box width="80%">
           {/* <ShowTreeComponent
            activeTree={activeTree}
            selectedTree="slider one"
          >
            <Muislider/>
          </ShowTreeComponent>
          <ShowTreeComponent
            activeTree={activeTree}
            selectedTree="portal one"
          >
            <Muiportal/>
          </ShowTreeComponent>
          <ShowTreeComponent
            activeTree={activeTree}
            selectedTree="stepper one"
              >
            <Muistepper/> 
              </ShowTreeComponent> */}
              
          <ShowTreeComponent
            activeTree={activeTree}
            selectedTree="modal two"
          > 
            <About/>
          </ShowTreeComponent>
        </Box>
      </Box>
    </>
  );
};

export default Tree;
