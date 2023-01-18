import IconButton from 'src/components/atoms/IconButton';
import SVG from 'src/utils/SVG';
import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

function useModal() {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true);
    // 모달창 열 때 바디 스크롤 잠금
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    // 모달창 닫을 때 바디 스크롤 풀림
    document.body.style.overflow = 'unset';
    setModalOpened(false);
  };

  interface IModalProps {
    children: React.ReactNode;
  }

  const ModalPortal = (props: IModalProps) => {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      if (document) {
        const dom = document.querySelector('#root-modal');
        ref.current = dom;
      }
    }, []);

    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <ModalContainer>
          <ModalOverlay onClick={closeModal}></ModalOverlay>
          <ModalWrapper className="modal-wrap">
            <ModalHeader>
              <IconButton label="팝업닫기" onClick={closeModal}>
                <SVG
                  name="modalClose"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                />
              </IconButton>
            </ModalHeader>
            <ModalBody>
              <div>{props.children}</div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalWrapper>
        </ModalContainer>,
        ref.current,
      );
    }

    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
  };
}

export default useModal;

const ModalContainer = styled.div`
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flexBox.flexMixin('column', 'center', 'center')}
`;

const ModalOverlay = styled.div`
  z-index: 2001;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
`;

const ModalWrapper = styled.div`
  z-index: 2002;
  position: relative;
  overflow: hidden;
  display: block;
  width: auto;
  max-width: 1024px;
  height: auto;
  max-height: calc(100% - ${({ theme }) => theme.mobile.notchHeight}px);
  border-radius: 8px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  ${({ theme }) => theme.flexBox.flexMixin('row', 'flex-end', 'center')}
  position: relative;
  padding: 20px 20px 12px;
`;

const ModalBody = styled.div`
  overflow: hidden;
  overflow-y: auto;
  height: auto;
  max-height: calc(100% - 54px - ${({ theme }) => theme.mobile.notchHeight}px);
  padding: 0 20px;
  font-size: 16px;
  text-align: center;
  &.has-btn {
    max-height: calc(
      100% - 124px - ${({ theme }) => theme.mobile.notchHeight}px
    );
  }
`;

const ModalFooter = styled.div`
  padding: 0 20px 20px;
  ${({ theme }) => theme.flexBox.flexMixin()};
  > button {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
