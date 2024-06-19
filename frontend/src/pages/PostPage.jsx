import { Avatar, Box, Button, Divider, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import Actions from '../components/Actions';
import Comment from '../components/Comment';
import { BsThreeDots } from 'react-icons/bs';
import useGetUserProfile from '../hooks/useGetUserProfile';

const PostPage = () => {
    const { user, loading } = useGetUserProfile();

    if (!user && loading) {
        return (
            <Flex justifyContent={'center'}>
                <Spinner size={'xl'} />
            </Flex>
        );
    }
    return (
        <>
            <Flex>
                <Flex w={'full'} alignItems={'center'} gap={3}>
                    <Avatar src={user.profilePic}  size={'md'} name={user.username} />
                    <Flex>
                        <Text fontSize={'sm'} fontWeight={'bold'}>
                            {user.username}
                        </Text>
                        <Image src='/verified.png' w='4' h={4} ml={4} />
                    </Flex>
                </Flex>
                <Flex gap={4} alignItems={'center'}>
                    <Text fontSize={'xs'} width={36} textAlign={'right'} color={'gray.light'}>
                        1d
                    </Text>
                    <BsThreeDots />
                </Flex>
            </Flex>

            <Text my={3}>Let&apos;s talk about threats.</Text>

            <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
                <Image src={'/post1.png'} w={'full'} />
            </Box>

            <Flex gap={3} my={3}>
                <Actions post={post} />
            </Flex>

            <Flex gap={2} alignItems={'center'}>
                <Text color={'gray.light'} fontSize={'sm'}>238 replies</Text>
                <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
                <Text color={'gray.light'} fontSize={'sm'}>
                    {200} likes
                </Text>
            </Flex>

            <Divider my={4} />

            <Flex justifyContent={'space-between'}>
                <Flex gap={2} alignItems={'center'}>
                    <Text fontSize={'2xl'}>👋</Text>
                    <Text color={'gray.light'}>Get the app to like, reply and post.</Text>
                </Flex>
                <Button>Get</Button>
            </Flex>

            <Divider my={4} />
            {/* <Comment
                comment='Looks really good!'
                createdAt='2d'
                likes={100}
                username='johndoe'
                userAvatar='https://bit.ly/dan-abramov'
            /> */}
        </>
    );
};

export default PostPage;