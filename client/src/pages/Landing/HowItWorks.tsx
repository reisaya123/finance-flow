import { Box, Chip, Indicator, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core"


export default function HowItWorksSection({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) {

    const steps = [
        { index: 1, title: 'Create Your Account', description: 'Sign up in seconds and set up your financial profile with ease.' },
        { index: 2, title: 'Add Income & Expenses', description: 'Log your transactions as they happen.' },
        { index: 3, title: 'Track & Analyze', description: 'View insights, set goals, and watch your financial health improve.' },
    ]
    return <Box ref={ref}>
        <Stack align='center'>
            <Chip variant="light" checked={true}>How It Works</Chip>
            <Text>Start Managing Your Finances in 3 Simple Steps</Text>
            <Text>Getting started with FinanceFlow is quick and effortless</Text>
        </Stack>
        <SimpleGrid cols={3} spacing="lg" mt='xl'>
            {steps.map((step) => <Indicator key={step.index} label={step.index} size={24} color="blue">
                <Paper shadow="sm" p="lg" h="100%">
                    <Title order={3} mt="md">{step.title}</Title>
                    <Text size="sm" mt="sm">{step.description}</Text>
                </Paper>
            </Indicator>)}
        </SimpleGrid>
    </Box>
}