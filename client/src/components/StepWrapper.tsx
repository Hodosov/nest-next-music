import { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Step, Steps } from 'chakra-ui-steps';

const steps = [
  { label: 'Информация о треке' },
  { label: 'Загрузите обложку' },
  { label: 'Загрузите трек' }
];

export const StapWrapper: FC<StapperProps> = ({ children, activeStep }) => {
  return (
    <Container>
      <Steps activeStep={activeStep}>
        {steps.map(({ label }) => (
          <Step mt="10" label={label} key={label}>
            <Box
              minHeight={208}
              mt={10}
              mb={10}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            >
              {children}
            </Box>
          </Step>
        ))}
      </Steps>
    </Container>
  );
};

interface StapperProps {
  activeStep: number;
}
