import { useState } from 'react';
import { Box, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
    const [loading, setLoading] = useState(true);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    return (
        <>
            <Text mb={4} fontWeight={'bold'}>
                Suggested Users
            </Text>
            <Flex direction={'column'} gap={4}>
                {!loading && suggestedUsers.map((user) => <SuggestedUser key={user._id} user={user} />)}
                {loading &&
                    [0, 1, 2, 3, 4].map((_, idx) => (
                        <Flex key={idx} gap={2} alignItems={'center'} p={'1'} borderRadius={'md'}>
                            <Box>
                                <SkeletonCircle size={'10'} />
                            </Box>
                            <Flex w={'full'} flexDirection={'column'} gap={2}>
                                <Skeleton h={'8px'} w={'80px'} />
                                <Skeleton h={'8px'} w={'90px'} />
                            </Flex>
                            <Flex>
                                <Skeleton h={'20px'} w={'60px'} />
                            </Flex>
                        </Flex>
                    ))}
            </Flex>
        </>
    )
}

export default SuggestedUsers;