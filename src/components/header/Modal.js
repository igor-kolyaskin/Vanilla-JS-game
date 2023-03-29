import tingle from "tingle.js";
import onClickApplySettings from "../../listeners/onClickApplySettings";

const modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["custom-class-1", "custom-class-2"],
  onOpen: function () {
    console.log("modal open");
  },
  onClose: function () {
    console.log("modal closed");
  },
  beforeClose: function () {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
    return false; // nothing happens
  },
});

modal.addFooterBtn(
  "Apply",
  "tingle-btn tingle-btn--primary tingle-btn--pull-right",
  function () {
    onClickApplySettings();
    modal.close();
  }
);

export default modal;
