import { Button, Text } from '@chakra-ui/react';

const SettingsPage = () => {
    return (
        <>
            <Text my={1} fontWeight={'bold'}>
                Freeze Your Account
            </Text>
            <Text my={1}>You can unfreeze your account anytime by logging in.</Text>
            <Button size={'sm'} colorScheme='red'>
                Freeze
            </Button>
        </>
    );
};

export default SettingsPage;