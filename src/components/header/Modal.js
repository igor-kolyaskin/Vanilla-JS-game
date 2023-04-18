import tingle from "tingle.js";
import onClickApplySettings from "../../listeners/onClickApplySettings";
import state from "../../store/state";

// eslint-disable-next-line new-cap
const modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["custom-class-1", "custom-class-2"],
  onOpen() {
    console.log("modal open");
    state.fieldConfigTemp = { ...state.fieldConfig };
  },
  onClose() {
    console.log("modal closed");
  },
  beforeClose() {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
  },
});

modal.addFooterBtn(
  "Apply",
  "tingle-btn tingle-btn--primary tingle-btn--pull-right",
  () => {
    onClickApplySettings();
    modal.close();
  },
);

export default modal;
