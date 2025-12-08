import { Box, Chip, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { ChartArea, Lock, TrendingUp, Wallet } from "lucide-react";

export default function FeaturesSection({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) {
    const features = [
        { icon: <Wallet />, title: 'Income Tracking', description: 'Easily log all your income sources and watch your earnings grow over time.' },
        { icon: <TrendingUp />, title: 'Expense Management', description: 'Categorize and track every expense to understand where your money goes.' },
        { icon: <ChartArea />, title: 'Visual Insights', description: 'Beautiful charts and graphs that make understanding your finances simple.' },
        { icon: <Lock />, title: 'Secure & Private', description: 'Your financial data is encrypted and protected' },
    ]
    return <Box ref={ref} bg='white' p='xl'>
        <Stack align='center'>
            <Chip variant="light" checked={true}>Features</Chip>
            <Text>Everything You Need to Manage Your Money</Text>
            <Text>Powerful features designed to give you complete control over your finances</Text>
        </Stack>
        <SimpleGrid cols={2} spacing="lg">
            {features.map((feature) => <Paper key={feature.title} shadow="sm" p='xl'>
                {feature.icon}
                <Title order={3} mt="md">{feature.title}</Title>
                <Text size="sm" mt="sm">{feature.description}</Text>
            </Paper>)}
        </SimpleGrid>
    </Box>
}