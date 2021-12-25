import { FileUpload } from '@/components/FIleUploader';
import { MainLayout } from '@/components/Layout';
import { StapWrapper } from '@/components/StepWrapper';
import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import { useSteps } from 'chakra-ui-steps';
import { useState } from 'react';

export default function CreateTrackPage() {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0
  });

  const [pecture, setPicture] = useState<FileList>();
  const [audio, setAudio] = useState<FileList>();

  const setPictureHelper = (file: FileList) => {
    setPicture(file);
  };

  const setAudioHelper = (file: FileList) => {
    setPicture(file);
  };

  return (
    <MainLayout>
      <StapWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Flex
            p={4}
            direction="column"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          >
            <Input placeholder="Название трека" />
            <Input mt="2" placeholder="Имя исполнителя" />
            <Textarea mt="2" placeholder="Слова к песне" />
          </Flex>
        )}
        {activeStep === 1 && (
          <FileUpload
            setFile={setPictureHelper}
            accept="image/*"
            type="image"
          />
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudioHelper} accept="audio/*" />
        )}
      </StapWrapper>
      <Flex justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={() => prevStep()}>
          Назад
        </Button>
        <Button disabled={activeStep === 2} onClick={() => nextStep()}>
          Далее
        </Button>
      </Flex>
    </MainLayout>
  );
}
