import { Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { IanimelistItem, useAnimeList } from "../../../contexts/AnimeList";

import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { DashboardCard } from "../../../components/DashboardCard";
import { useAuth } from "../../../contexts/Auth";
import { DashboardListEmpty } from "./DashboardListEmpty";

interface IDashboardListProps {
  FavoritesView: boolean;
}

export const DashboardList = ({ FavoritesView }: IDashboardListProps) => {
  const { userAnimes, getUserAnimes, updateAnime } = useAnimeList();
  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [columns, setColumns] = useState({
    planToWatch: {
      name: "Plan to Watch",
      items: [] as IanimelistItem[],
    },
    dropped: {
      name: "Dropped",
      items: [] as IanimelistItem[],
    },
    onHold: {
      name: "On-Hold",
      items: [] as IanimelistItem[],
    },
    completed: {
      name: "Completed",
      items: [] as IanimelistItem[],
    },
    watching: {
      name: "Watching",
      items: [] as IanimelistItem[],
    },
    favorites: {
      name: "Favorites",
      items: [] as IanimelistItem[],
    },
  });

  const handleUpdate = () => {
    getUserAnimes().then((_) => setIsLoading(false));

    const PlanToWatch = userAnimes.filter((anime) => anime.status === "planToWatch");
    const Dropped = userAnimes.filter((anime) => anime.status === "dropped");
    const OnHold = userAnimes.filter((anime) => anime.status === "onHold");
    const Completed = userAnimes.filter((anime) => anime.status === "completed");
    const Watching = userAnimes.filter((anime) => anime.status === "watching");
    const Favorites = userAnimes.filter((anime) => anime.favorite === true);

    setColumns({
      ...columns,
      planToWatch: { ...columns.planToWatch, items: PlanToWatch },
      dropped: { ...columns.dropped, items: Dropped },
      onHold: { ...columns.onHold, items: OnHold },
      completed: { ...columns.completed, items: Completed },
      watching: { ...columns.watching, items: Watching },
      favorites: { ...columns.favorites, items: Favorites },
    });
  };

  useEffect(() => {
    signIn({ email: "kenzinho@mail.com", password: "123456" });
    handleUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, FavoritesView]);

  const onDragEnd = (result: DropResult, columns: any, setColumns: React.Dispatch<React.SetStateAction<any>>) => {
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
      ) : FavoritesView ? (
        <Flex w="225vw">
          <Center w="100%" flexDir="column" alignItems="flex-start" justifyContent="center" borderRadius="10px">
            <Flex flexFlow="column nowrap" width={["95vw", "95vw", "95vw", "35vw"]} height="93vh" align="center">
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
                Favorites
              </Text>
              <VStack width="90%" spacing={6} height="93vh">
                {columns &&
                  columns.favorites.items.map((anime, index) => {
                    return (
                      <DashboardCard anime={anime.anime.data} id={anime.id} key={index} favorite={anime.favorite} />
                    );
                  })}
              </VStack>
            </Flex>
          </Center>
        </Flex>
      ) : (
        <>
          <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
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
                          {column &&
                            column.items.map((anime, index) => {
                              return (
                                <Draggable key={anime.id} draggableId={`${anime.id}`} index={index}>
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
                                          favorite={anime.favorite}
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
        </>
      )}
    </HStack>
  );
};
