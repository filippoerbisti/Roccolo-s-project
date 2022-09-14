import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: move;
  &:hover {
    //background: #eeeeee;
  }
`;

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared"
};

export default function Stage() {

    const [blocks, setBlocks] = useState([
        {
          id: 1,
          content: "Tappe",
          type: "container",
          children: [
            {
                id: 2,
                content: "Tappa 1",
                width: 3,
                type: "text",
            },
            {
                id: 3,
                content: "Tappa2",
                width: 3,
                type: "text",
            },
            {
                id: 4,
                content: "Tappa3",
                width: 3,
                type: "text",
            },
            {
                id: 5,
                content: "Tappa4",
                width: 3,
                type: "text",
            },
          ]
        }
    ]);

    return (
        <div>
            <ReactSortable list={blocks} setList={setBlocks} {...sortableOptions}>
                {blocks.map((block, blockIndex) => (
                <BlockWrapper
                    key={block.id}
                    block={block}
                    blockIndex={[blockIndex]}
                    setBlocks={setBlocks}
                />
                ))}
            </ReactSortable>
        </div>
    );
}
function Container({ block, blockIndex, setBlocks }) {
    return (
        <>
            <ReactSortable
                key={block.id}
                list={block.children}
                setList={(currentList) => {
                setBlocks((sourceList) => {
                    const tempList = [...sourceList];
                    const _blockIndex = [...blockIndex];
                    const lastIndex = _blockIndex.pop();
                    const lastArr = _blockIndex.reduce(
                        (arr, i) => arr[i]["children"],
                        tempList
                    );
                    lastArr[lastIndex]["children"] = currentList;
                    return tempList;
                });
                }}
                {...sortableOptions}
            >
                {block.children &&
                    block.children.map((childBlock, index) => {
                        return (
                            <BlockWrapper
                                key={childBlock.id}
                                block={childBlock}
                                blockIndex={[...blockIndex, index]}
                                setBlocks={setBlocks}
                            />
                        );
                    })
                }
            </ReactSortable>
        </>
    );
}

function BlockWrapper({ block, blockIndex, setBlocks }) {
    if (!block) return null;
    if (block.type === "container") {
        return (
        <StyledBlockWrapper className="block">
            {block.content} {/* Title Block displayed */}
            <Container
                block={block}
                setBlocks={setBlocks}
                blockIndex={blockIndex}
            />
        </StyledBlockWrapper>
        );
    } else {
        return (
            <StyledBlockWrapper className="block">
                {block.content} {/* Text displayed */}
            </StyledBlockWrapper>
        );
    }
}