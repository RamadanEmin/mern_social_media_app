import { Avatar, Flex, Text } from '@chakra-ui/react';

const Message = ({ ownMessage }) => {
    return (
        <>
            {ownMessage ? (
                <Flex gap={2} alignSelf={'flex-end'}>
                    <Text bg={'blue.400'} maxW={'350px'} p={1} borderRadius={'md'}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae id reprehenderit ullam debitis numquam
                        veritatis, odit quia ipsam quis harum quos assumenda? Magnam fuga aut, non a inventore quaerat
                        temporibus, reprehenderit harum excepturi autem aspernatur voluptatum laborum commodi voluptate qui
                        dignissimos, repudiandae modi ratione est unde esse voluptates perferendis repellendus?
                    </Text>
                    <Avatar src='' w='7' h={7} />
                </Flex>
            ) : (
                <Flex gap={2}>
                    <Avatar src='' w='7' h={7} />
                    <Text bg={'blue.400'} maxW={'350px'} p={1} borderRadius={'md'}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae id reprehenderit ullam debitis numquam
                        veritatis, odit quia ipsam quis harum quos assumenda? Magnam fuga aut, non a inventore quaerat
                        temporibus, reprehenderit harum excepturi autem aspernatur voluptatum laborum commodi voluptate qui
                        dignissimos, repudiandae modi ratione est unde esse voluptates perferendis repellendus?
                    </Text>
                </Flex>
            )}
        </>
    );
};

export default Message;