(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})(function() {
  "use strict";
  
  class Menu {
    constructor() {
      this.init = () => {
        this.getMenuElementsAndAddEvents();
        this.getNavbarElementsAndAddEvents();
      };

      this.getNavbarElementsAndAddEvents = () => {
        const bodyOverflow = document.body.style.overflow;
        const navbars = getAllElementsByDataAttribute("thq", "thq-navbar");
        
        navbars.forEach((navbar) => {
          const burgerBtn = getElByDataAttribute(
            "thq",
            "thq-burger-menu",
            navbar
          );
          const mobileMenu = getElByDataAttribute(
            "thq",
            "thq-mobile-menu",
            navbar
          );
          const closeBtn = getElByDataAttribute(
            "thq",
            "thq-close-menu",
            navbar
          );
          
          if (!burgerBtn || !mobileMenu || !closeBtn) {
            return;
          }
          
          burgerBtn.addEventListener("click", () => {
            document.body.style.overflow = "hidden";
            mobileMenu.classList.add("teleport-show");
          });
          
          closeBtn.addEventListener("click", () => {
            document.body.style.overflow = bodyOverflow;
            mobileMenu.classList.remove("teleport-show");
          });
          
          mobileMenu.addEventListener("click", (event) => {
            const target = event.target;
            if (target instanceof HTMLAnchorElement) {
              mobileMenu.classList.remove("teleport-show");
            }
          });
        });
      };

      this.getMenuElementsAndAddEvents = () => {
        const menuElements = getAllElByClass("teleport-menu-burger");
        if (menuElements.length === 0) {
          return;
        }
        
        menuElements.forEach((burgerMenuElement) => {
          var _a;
          const mobileMenuElement = ((_a = burgerMenuElement.nextElementSibling) == null ? void 0 : _a.className.includes(
            "teleport-menu-mobile"
          )) ? burgerMenuElement.nextElementSibling : null;
          
          if (!mobileMenuElement) {
            return;
          }
          
          const closeMenuElement = mobileMenuElement.querySelector(
            '*[class*="teleport-menu-close"]'
          );
          
          if (!closeMenuElement) {
            return;
          }
          
          burgerMenuElement.addEventListener("click", () => {
            mobileMenuElement.classList.add("teleport-show");
          });
          
          closeMenuElement.addEventListener("click", () => {
            mobileMenuElement.classList.remove("teleport-show");
          });
        });
      };
    }
  }

  function getAllElementsByDataAttribute(attribute, value) {
    return Array.from(
      document.querySelectorAll(`[data-${attribute}="${value}"]`)
    );
  }

  function getElByDataAttribute(attribute, value, parent) {
    return parent.querySelector(`[data-${attribute}="${value}"]`);
  }

  function getAllElByClass(className) {
    return Array.from(document.getElementsByClassName(className));
  }

  document.addEventListener("DOMContentLoaded", () => {
    new Menu().init();
  });
});