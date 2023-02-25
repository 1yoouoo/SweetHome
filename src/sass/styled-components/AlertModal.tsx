import styled from "styled-components";

const StyledAlertModal = styled.div`
  .background {
    background-color: rgba(0, 0, 0, 0.8);
    cursor: default;
  }
  .AlertModal {
    background-color: #121212;
    display: flex;
    margin: 20px 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 230px;
    height: 120px;
    border: 1px solid #fff;
    border-radius: 3px;
    &__warning {
      font-size: 16px;
    }
    &__button {
      display: flex;
      justify-content: space-around;
      button {
        width: 60px;
        height: 30px;
        // flex-grow: 1;
        margin: 0 20px;
        border-radius: 3px;
      }
      &--yes {
        color: #fff;
        cursor: pointer;
        background-color: #ff0000;
      }
      &--no {
        cursor: pointer;
        color: #000;
      }
    }
  }
`;
function AlertModal({ onPossitiveClick, onNagativeClick }: any) {
  return (
    <StyledAlertModal>
      <div className="background">
        <div className="AlertModal">
          <div className="AlertModal__warning">정말 삭제하시겠습니까 ?</div>
          <div className="AlertModal__button">
            <button
              className="AlertModal__button--yes"
              onClick={onNagativeClick}
            >
              삭제
            </button>
            <button
              className="AlertModal__button--no"
              onClick={onPossitiveClick}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </StyledAlertModal>
  );
}

export default AlertModal;
