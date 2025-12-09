import { AppShell, Button, Container, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import FeaturesSection from './Features';
import HowItWorksSection from './HowItWorks';
import financeFlowLogo from '../../assets/finance_flow_logo.png';
import landingImg from '../../assets/landing_img.png'
import { useScrollIntoView } from '@mantine/hooks';

export default function LandingPage() {

    const {
        scrollIntoView: scrollToFeatures,
        targetRef: featuresRef,
    } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });

    const {
        scrollIntoView: scrollToHowItWorks,
        targetRef: howItWorksRef,
    } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });


    return <AppShell padding="md" header={{ height: 80 }}>
        <AppShell.Header>
            <Flex justify="space-between" align="center" h='100%' p='xl'>
                <Group>
                    <Image
                        src={financeFlowLogo}
                        alt="FinanceFlow Logo"
                        h={30}
                        w="auto"
                        fit="contain"
                    />
                    <Text size="xl">FinanceFlow</Text>
                </Group>
                <Group>
                    <Button variant='transparent' onClick={() => scrollToFeatures({ alignment: 'center' })}>
                        Features
                    </Button>
                    <Button variant='transparent' onClick={() => scrollToHowItWorks({ alignment: 'center' })}>
                        How it Works
                    </Button>
                </Group>
                <Button variant="filled" size="md">
                    Login
                </Button>
            </Flex>
        </AppShell.Header>

        <AppShell.Main p={0}>

            <Flex bg="#2564eb" w="100%" py={150} align='center'>
                <Container my={50}>
                    <Flex align="center" justify="space-between" gap={100}>
                        <Stack>
                            <Title order={1} c="white">
                                Track Your Finances Effortlessly
                            </Title>

                            <Text c="white">
                                FinanceFlow helps you track your income and expenses with ease.
                                Get real-time insights into your spending patterns and make smarter
                                financial decisions every month.
                            </Text>

                            <Button variant="white" size="md">
                                Get Started
                            </Button>
                        </Stack>

                        <Image
                            src={landingImg}
                            alt="Landing Image"
                            h={400}
                            fit="contain"
                        />
                    </Flex>
                </Container>
            </Flex>

            <Stack align="center" gap={100} mb={100}>
                <FeaturesSection ref={featuresRef} />
                <HowItWorksSection ref={howItWorksRef} />
            </Stack>
        </AppShell.Main>

    </AppShell>

}