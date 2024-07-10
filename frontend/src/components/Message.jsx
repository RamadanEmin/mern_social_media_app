import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { selectedConversationAtom } from '../atoms/messagesAtom';
import userAtom from '../atoms/userAtom';
import { BsCheck2All } from 'react-icons/bs';

const Message = ({ ownMessage, message }) => {
    const selectedConversation = useRecoilValue(selectedConversationAtom);
    const user = useRecoilValue(userAtom);

    return (
        <>
            {ownMessage ? (
                <Flex gap={2} alignSelf={'flex-end'}>
                    {false && (
                        <Flex bg={'green.800'} maxW={'350px'} p={1} borderRadius={'md'}>
                            <Text color={'white'}>{message.text}</Text>
                            <Box
                                alignSelf={'flex-end'}
                                ml={1}
                                color={message.seen ? 'blue.400' : ''}
                                fontWeight={'bold'}
                            >
                                <BsCheck2All size={16} />
                            </Box>
                        </Flex>
                    )}
                    {true && (
                        <Flex mt={5} w={'200px'}>
                            <Image
                                src={'https://images.unsplash.com/photo-1713994099171-dcfc05d556aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'}
                                alt='Message image'
                                borderRadius={4}
                            />
                        </Flex>
                    )}
                    <Avatar src={user.profilePic} w='7' h={7} />
                </Flex>
            ) : (
                <Flex gap={2}>
                    <Avatar src={selectedConversation.userProfilePic} w='7' h={7} />

                    {message.text && (
                        <Text maxW={'350px'} bg={'gray.400'} p={1} borderRadius={'md'} color={'black'}>
                            {message.text}
                        </Text>
                    )}

                    {message.img && (
                        <Flex mt={5} w={'200px'}>
                            <Image
                                src={'https://images.unsplash.com/photo-1713994099171-dcfc05d556aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'}
                                alt='Message image'
                                borderRadius={4}
                            />
                        </Flex>
                    )}
                </Flex>
            )}
        </>
    );
};

export default Message;