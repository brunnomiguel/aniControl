import { Box, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { ColumnList } from "../../components/ColumnList";
import { DashboardDrawer } from "../../components/Drawer";
import { Header } from "../../components/Header";

export const Dashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box w="100vw" h="100vh" bgColor="#21212D">
      <Header />
      <Flex flexDir="row">
        <DashboardDrawer isOpen={true} onClose={onClose} />
        <HStack
          padding="1%"
          spacing={10}
          overflowX="scroll"
          overflowY="hidden"
          h="93vh"
          css={{
            "&::-webkit-scrollbar": {
              height: "4px",
            },
            "&::-webkit-scrollbar-track": {
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#5CC6DC",
              borderRadius: "24px",
            },
          }}
        >
          <ColumnList
            title="Plan to Watch"
            cardList={[
              {
                images: {
                  jpg: {
                    image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
                    small_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
                    large_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
                  },
                },
                trailer: {
                  url: "https://www.youtube.com/watch?v=qig4KOK2R2g",
                },
                title: "Cowboy Bebop",
                episodes: 26,
                status: "Finished Airing",
                duration: "24 min per ep",
                rating: "R - 17+ (violence & profanity)",
                streaming: [
                  {
                    name: "Crunchyroll",
                    url: "http://www.crunchyroll.com/series-271225",
                  },
                  {
                    name: "Funimation",
                    url: "https://www.funimation.com/shows/cowboy-bebop",
                  },
                  {
                    name: "Netflix",
                    url: "https://www.netflix.com/title/80001305",
                  },
                  {
                    name: "Tubi TV",
                    url: "https://tubitv.com/series/2052/cowboy-bebop-subtitled",
                  },
                ],
                score: 8.75,
                rank: 38,
                favorites: 73573,
                synopsis:
                  "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
                season: "spring",
                year: 1998,
                genres: [
                  {
                    mal_id: 1,
                    type: "anime",
                    name: "Action",
                    url: "https://myanimelist.net/anime/genre/1/Action",
                  },
                  {
                    mal_id: 24,
                    type: "anime",
                    name: "Sci-Fi",
                    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
                  },
                ],
              },
              {
                images: {
                  jpg: {
                    image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
                    small_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
                    large_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
                  },
                },
                trailer: {
                  url: "https://www.youtube.com/watch?v=qig4KOK2R2g",
                },
                title: "Cowboy Bebop",
                episodes: 26,
                status: "Finished Airing",
                duration: "24 min per ep",
                rating: "R - 17+ (violence & profanity)",
                streaming: [
                  {
                    name: "Crunchyroll",
                    url: "http://www.crunchyroll.com/series-271225",
                  },
                  {
                    name: "Funimation",
                    url: "https://www.funimation.com/shows/cowboy-bebop",
                  },
                  {
                    name: "Netflix",
                    url: "https://www.netflix.com/title/80001305",
                  },
                  {
                    name: "Tubi TV",
                    url: "https://tubitv.com/series/2052/cowboy-bebop-subtitled",
                  },
                ],
                score: 8.75,
                rank: 38,
                favorites: 73573,
                synopsis:
                  "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
                season: "spring",
                year: 1998,
                genres: [
                  {
                    mal_id: 1,
                    type: "anime",
                    name: "Action",
                    url: "https://myanimelist.net/anime/genre/1/Action",
                  },
                  {
                    mal_id: 24,
                    type: "anime",
                    name: "Sci-Fi",
                    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
                  },
                ],
              },
            ]}
          />
          <ColumnList
            title="Watching"
            cardList={[
              {
                images: {
                  jpg: {
                    image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
                    small_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
                    large_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
                  },
                },
                trailer: {
                  url: "https://www.youtube.com/watch?v=qig4KOK2R2g",
                },
                title: "Cowboy Bebop",
                episodes: 26,
                status: "Finished Airing",
                duration: "24 min per ep",
                rating: "R - 17+ (violence & profanity)",
                streaming: [
                  {
                    name: "Crunchyroll",
                    url: "http://www.crunchyroll.com/series-271225",
                  },
                  {
                    name: "Funimation",
                    url: "https://www.funimation.com/shows/cowboy-bebop",
                  },
                  {
                    name: "Netflix",
                    url: "https://www.netflix.com/title/80001305",
                  },
                  {
                    name: "Tubi TV",
                    url: "https://tubitv.com/series/2052/cowboy-bebop-subtitled",
                  },
                ],
                score: 8.75,
                rank: 38,
                favorites: 73573,
                synopsis:
                  "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
                season: "spring",
                year: 1998,
                genres: [
                  {
                    mal_id: 1,
                    type: "anime",
                    name: "Action",
                    url: "https://myanimelist.net/anime/genre/1/Action",
                  },
                  {
                    mal_id: 24,
                    type: "anime",
                    name: "Sci-Fi",
                    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
                  },
                ],
              },
            ]}
          />
          <ColumnList
            title="On-Hold"
            cardList={[
              {
                images: {
                  jpg: {
                    image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
                    small_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
                    large_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
                  },
                },
                trailer: {
                  url: "https://www.youtube.com/watch?v=qig4KOK2R2g",
                },
                title: "Cowboy Bebop",
                episodes: 26,
                status: "Finished Airing",
                duration: "24 min per ep",
                rating: "R - 17+ (violence & profanity)",
                streaming: [
                  {
                    name: "Crunchyroll",
                    url: "http://www.crunchyroll.com/series-271225",
                  },
                  {
                    name: "Funimation",
                    url: "https://www.funimation.com/shows/cowboy-bebop",
                  },
                  {
                    name: "Netflix",
                    url: "https://www.netflix.com/title/80001305",
                  },
                  {
                    name: "Tubi TV",
                    url: "https://tubitv.com/series/2052/cowboy-bebop-subtitled",
                  },
                ],
                score: 8.75,
                rank: 38,
                favorites: 73573,
                synopsis:
                  "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
                season: "spring",
                year: 1998,
                genres: [
                  {
                    mal_id: 1,
                    type: "anime",
                    name: "Action",
                    url: "https://myanimelist.net/anime/genre/1/Action",
                  },
                  {
                    mal_id: 24,
                    type: "anime",
                    name: "Sci-Fi",
                    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
                  },
                ],
              },
            ]}
          />
          <ColumnList
            title="Completed"
            cardList={[
              {
                images: {
                  jpg: {
                    image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
                    small_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
                    large_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
                  },
                },
                trailer: {
                  url: "https://www.youtube.com/watch?v=qig4KOK2R2g",
                },
                title: "Cowboy Bebop",
                episodes: 26,
                status: "Finished Airing",
                duration: "24 min per ep",
                rating: "R - 17+ (violence & profanity)",
                streaming: [
                  {
                    name: "Crunchyroll",
                    url: "http://www.crunchyroll.com/series-271225",
                  },
                  {
                    name: "Funimation",
                    url: "https://www.funimation.com/shows/cowboy-bebop",
                  },
                  {
                    name: "Netflix",
                    url: "https://www.netflix.com/title/80001305",
                  },
                  {
                    name: "Tubi TV",
                    url: "https://tubitv.com/series/2052/cowboy-bebop-subtitled",
                  },
                ],
                score: 8.75,
                rank: 38,
                favorites: 73573,
                synopsis:
                  "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
                season: "spring",
                year: 1998,
                genres: [
                  {
                    mal_id: 1,
                    type: "anime",
                    name: "Action",
                    url: "https://myanimelist.net/anime/genre/1/Action",
                  },
                  {
                    mal_id: 24,
                    type: "anime",
                    name: "Sci-Fi",
                    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
                  },
                ],
              },
            ]}
          />
          <ColumnList
            title="Dropped"
            cardList={[
              {
                images: {
                  jpg: {
                    image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
                    small_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
                    large_image_url:
                      "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
                  },
                },
                trailer: {
                  url: "https://www.youtube.com/watch?v=qig4KOK2R2g",
                },
                title: "Cowboy Bebop",
                episodes: 26,
                status: "Finished Airing",
                duration: "24 min per ep",
                rating: "R - 17+ (violence & profanity)",
                streaming: [
                  {
                    name: "Crunchyroll",
                    url: "http://www.crunchyroll.com/series-271225",
                  },
                  {
                    name: "Funimation",
                    url: "https://www.funimation.com/shows/cowboy-bebop",
                  },
                  {
                    name: "Netflix",
                    url: "https://www.netflix.com/title/80001305",
                  },
                  {
                    name: "Tubi TV",
                    url: "https://tubitv.com/series/2052/cowboy-bebop-subtitled",
                  },
                ],
                score: 8.75,
                rank: 38,
                favorites: 73573,
                synopsis:
                  "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
                season: "spring",
                year: 1998,
                genres: [
                  {
                    mal_id: 1,
                    type: "anime",
                    name: "Action",
                    url: "https://myanimelist.net/anime/genre/1/Action",
                  },
                  {
                    mal_id: 24,
                    type: "anime",
                    name: "Sci-Fi",
                    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
                  },
                ],
              },
            ]}
          />
        </HStack>
      </Flex>
    </Box>
  );
};
