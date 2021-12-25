import { Button, Center, Flex, Input } from '@chakra-ui/react';
import React, { ChangeEvent, FC, MutableRefObject, useRef } from 'react';

export const FileUpload: FC<FileUploadProps> = ({ type, setFile, accept }) => {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  return (
    <Flex onClick={() => ref.current?.click()}>
      <Input ref={ref} type="file" hidden accept={accept} onChange={onChange} />
      <Center width="100%" height="208">
        <Button>{type ? 'Загрузите изображение' : 'Загрузите картинку'}</Button>
      </Center>
    </Flex>
  );
};

interface FileUploadProps {
  setFile: Function;
  accept: string;
  type?: string;
}
