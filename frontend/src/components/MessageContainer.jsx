import { useEffect } from 'react';
import { Avatar, Divider, Flex, Image, Skeleton, SkeletonCircle, Text, useColorModeValue } from '@chakra-ui/react';
import Message from './Message';
import MessageInput from './MessageInput';
import useShowToast from '../hooks/useShowToast';
import { useRecoilValue } from 'recoil';
import { selectedConversationAtom } from '../atoms/messagesAtom';

const MessageContainer = () => {
    const selectedConversation = useRecoilValue(selectedConversationAtom);
    const showToast = useShowToast();

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await fetch(`/api/messages/${selectedConversation.userId}`);
                const data = await res.json();

                if (data.error) {
                    showToast('Error', data.error, 'error');
                    return;
                }
                console.log(data);
            } catch (error) {
                showToast('Error', error.message, 'error');
            }
        };

        getMessages();
    }, [showToast, selectedConversation.userId]);

    return (
        <Flex
            flex='70'
            bg={useColorModeValue('gray.200', 'gray.dark')}
            borderRadius={'md'}
            p={2}
            flexDirection={'column'}
        >
            <Flex w={'full'} h={12} alignItems={'center'} gap={2}>
                <Avatar src='' size={'sm'} />
                <Text display={'flex'} alignItems={'center'}>
                    johndoe<Image src='/verified.png' w={4} h={4} ml={1} />
                </Text>
            </Flex>

            <Divider />

            <Flex flexDir={'column'} gap={4} my={4} p={2} height={'400px'} overflowY={'auto'}>
                {true && (
                    [...Array(5)].map((_, i) => (
                        <Flex
                            key={i}
                            gap={2}
                            alignItems={'center'}
                            p={1}
                            borderRadius={'md'}
                            alignSelf={i % 2 === 0 ? 'flex-start' : 'flex-end'}
                        >
                            {i % 2 === 0 && <SkeletonCircle size={7} />}
                            <Flex flexDir={'column'} gap={2}>
                                <Skeleton h='8px' w='250px' />
                                <Skeleton h='8px' w='250px' />
                                <Skeleton h='8px' w='250px' />
                            </Flex>
                            {i % 2 !== 0 && <SkeletonCircle size={7} />}
                        </Flex>
                    ))
                )}

                <Message ownMessage={true} />
                <Message ownMessage={false} />
                <Message ownMessage={false} />
                <Message ownMessage={true} />
            </Flex>

            <MessageInput />
        </Flex>
    );
};

export default MessageContainer;