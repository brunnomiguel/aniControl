/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { useAnimeList } from "../../../contexts/AnimeList";

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { DashboardCard } from "../../../components/DashboardCard";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { DashboardListEmpty } from "./DashboardListEmpty";

const animeColumns = {
  one: {
    name: "Plan to Watch",
    items: [],
  },
  two: {
    name: "Dropped",
    items: [],
  },
  three: {
    name: "On-Hold",
    items: [],
  },
  four: {
    name: "Completed",
    items: [],
  },
  five: {
    name: "Watching",
    items: [],
  },
};

export const DashboardList = () => {
  const { userAnimes, getUserAnimes } = useAnimeList();

  useEffect(() => {
    getUserAnimes();
  }, []);

  const [columns, setColumns] = useState({
    ...animeColumns,
    one: {
      name: "Plan to Watch",
      items: userAnimes,
    },
  });

  const onDragEnd = (
    result: DropResult,
    columns: any,
    setColumns: React.Dispatch<React.SetStateAction<any>>
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <HStack
      padding="1%"
      spacing={10}
      overflowX="scroll"
      h="93vh"
      css={{
        "&::-webkit-scrollbar": {
          width: "6px",
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#5CC6DC",
          borderRadius: "24px",
        },
      }}
    >
      {userAnimes.length === 0 ? (
        <DashboardListEmpty />
      ) : (
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => {
                  return (
                    <Flex
                      flexFlow="column nowrap"
                      width={["95vw", "95vw", "95vw", "35vw"]}
                      height="93vh"
                      align="center"
                    >
                      <Text
                        as="h2"
                        bg="#5A2843"
                        marginTop="1rem"
                        marginBottom="1rem"
                        borderRadius="4px"
                        color="#ffffff"
                        textAlign="center"
                        fontWeight="bold"
                        padding="0.5rem"
                        fontSize="1.5rem"
                        width={["95vw", "95vw", "95vw", "35vw"]}
                      >
                        {column.name}
                      </Text>

                      <VStack
                        width="90%"
                        spacing={6}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        height="93vh"
                      >
                        {column.items &&
                          column.items.map((anime, index) => {
                            return (
                              <Draggable
                                key={anime.id}
                                draggableId={`${
                                  anime.id + anime.anime.data.mal_id
                                }`}
                                index={index}
                              >
                                {(provided) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <DashboardCard
                                        anime={anime.anime.data}
                                        id={anime.id}
                                        key={index}
                                      />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                      </VStack>
                    </Flex>
                  );
                }}
              </Droppable>
            );
          })}
        </DragDropContext>
      )}
    </HStack>
  );
};
