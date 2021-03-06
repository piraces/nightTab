var control = (function() {

  var _allControl = [{
    element: helper.e(".control-menu"),
    type: "button",
    func: function() {
      menu.toggle();
    }
  }, {
    element: helper.e(".control-add"),
    type: "button",
    func: function() {
      link.add();
    }
  }, {
    element: helper.e(".control-edit"),
    path: "bookmarks.edit",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-current"),
    path: "theme.accent.current",
    type: "color",
    func: function() {
      accent.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-hours"),
    path: "header.clock.show.hours",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-minutes"),
    path: "header.clock.show.minutes",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-seconds"),
    path: "header.clock.show.seconds",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-separator"),
    path: "header.clock.show.separator",
    type: "checkbox",
    func: function() {
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-24"),
    path: "header.clock.hour24",
    type: "checkbox",
    func: function() {
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-clock-show-meridiem"),
    path: "header.clock.show.meridiem",
    type: "checkbox",
    func: function() {
      dependents();
      clock.clear();
      clock.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-day"),
    path: "header.date.show.day",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-date"),
    path: "header.date.show.date",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-month"),
    path: "header.date.show.month",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-year"),
    path: "header.date.show.year",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-show-separator"),
    path: "header.date.show.separator",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-character-length-short"),
    path: "header.date.character.length",
    type: "radio",
    func: function() {
      render();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-date-character-length-long"),
    path: "header.date.character.length",
    type: "radio",
    func: function() {
      render();
      date.clear();
      date.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-search-show"),
    path: "header.search.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render();
    }
  }, {
    element: helper.e(".control-header-search-grow"),
    path: "header.search.grow",
    type: "checkbox",
    func: function() {
      render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-search-focus"),
    path: "header.search.focus",
    type: "checkbox",
    func: function() {}
  }, {
    element: helper.e(".control-header-search-engine-google"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-duckduckgo"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-youtube"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-giphy"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom"),
    path: "header.search.engine.selected",
    type: "radio",
    func: function() {
      render();
      dependents();
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom-name"),
    path: "header.search.engine.custom.name",
    type: "text",
    func: function() {
      search.render();
    }
  }, {
    element: helper.e(".control-header-search-engine-custom-url"),
    path: "header.search.engine.custom.url",
    type: "text",
    func: function() {
      search.render();
    }
  }, {
    element: helper.e(".control-header-edit-add-show"),
    path: "header.editAdd.show",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-accent-show"),
    path: "header.accent.show",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-left"),
    path: "header.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-center"),
    path: "header.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-horizontal-right"),
    path: "header.alignment.horizontal",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-top"),
    path: "header.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-center"),
    path: "header.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-alignment-vertical-bottom"),
    path: "header.alignment.vertical",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-header-shade-show"),
    path: "header.shade.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-style-always"),
    path: "header.shade.style",
    type: "radio",
    func: function() {
      render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-style-scroll"),
    path: "header.shade.style",
    type: "radio",
    func: function() {
      render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-opacity"),
    path: "header.shade.opacity",
    type: "range",
    valueMod: ["reverse", "float"],
    func: function() {
      render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-padding-top"),
    path: "header.shade.padding.top",
    type: "range",
    additionalEvents: [{
      event: "mousedown",
      action: function() {
        header.edge("show");
      }
    }, {
      event: "mouseup",
      action: function() {
        header.edge("hide");
      }
    }],
    func: function() {
      render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-padding-bottom"),
    path: "header.shade.padding.bottom",
    type: "range",
    additionalEvents: [{
      event: "mousedown",
      action: function() {
        header.edge("show");
      }
    }, {
      event: "mouseup",
      action: function() {
        header.edge("hide");
      }
    }],
    func: function() {
      render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-border-top-show"),
    path: "header.shade.border.top.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-border-top-width"),
    path: "header.shade.border.top.width",
    type: "range",
    func: function() {
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-border-bottom-show"),
    path: "header.shade.border.bottom.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render();
    }
  }, {
    element: helper.e(".control-header-shade-border-bottom-width"),
    path: "header.shade.border.bottom.width",
    type: "range",
    func: function() {
      header.render();
    }
  }, {
    element: helper.e(".control-bookmarks-link-show"),
    path: "bookmarks.link.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      header.render();
      search.render();
    }
  }, {
    element: helper.e(".control-bookmarks-name-show"),
    path: "bookmarks.name.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-header-greeting-show"),
    path: "header.greeting.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      greeting.clear();
      greeting.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-greeting-type-good"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      render();
      dependents();
      greeting.clear();
      greeting.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-greeting-type-hello"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      render();
      dependents();
      greeting.clear();
      greeting.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-greeting-type-hi"),
    path: "header.greeting.type",
    type: "radio",
    func: function() {
      render();
      dependents();
      greeting.clear();
      greeting.render();
      header.render();
    }
  }, {
    element: helper.e(".control-header-greeting-name"),
    path: "header.greeting.name",
    type: "text",
    func: function() {
      render();
      dependents();
      greeting.clear();
      greeting.render();
      header.render();
    }
  }, {
    element: helper.e(".control-bookmarks-url-show"),
    path: "bookmarks.url.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
    }
  }, {
    element: helper.e(".control-bookmarks-url-style-dark"),
    path: "bookmarks.url.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-bookmarks-url-style-light"),
    path: "bookmarks.url.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-bookmarks-new-tab"),
    path: "bookmarks.newTab",
    type: "checkbox",
    func: function() {
      link.clear();
      link.render();
    }
  }, {
    element: helper.e(".control-bookmarks-style-block"),
    path: "bookmarks.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-bookmarks-style-list"),
    path: "bookmarks.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-bookmarks-sort-none"),
    path: "bookmarks.sort",
    type: "radio",
    func: function() {
      link.clear();
      link.render();
    }
  }, {
    element: helper.e(".control-bookmarks-sort-name"),
    path: "bookmarks.sort",
    type: "radio",
    func: function() {
      link.clear();
      link.render();
    }
  }, {
    element: helper.e(".control-bookmarks-sort-letter"),
    path: "bookmarks.sort",
    type: "radio",
    func: function() {
      link.clear();
      link.render();
    }
  }, {
    element: helper.e(".control-layout-width"),
    path: "layout.width",
    type: "range",
    additionalEvents: [{
      event: "mousedown",
      action: function() {
        layout.edge("show");
      }
    }, {
      event: "mouseup",
      action: function() {
        layout.edge("hide");
      }
    }],
    func: function() {
      render();
      layout.render();
      header.render();
    }
  }, {
    element: helper.e(".control-layout-scroll-past-end"),
    path: "layout.scrollPastEnd",
    type: "checkbox",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-layout-title"),
    path: "layout.title",
    type: "text",
    func: function() {
      title.render();
    }
  }, {
    element: helper.e(".control-theme-style-dark"),
    path: "theme.style",
    type: "radio",
    func: function() {
      render();
      accent.render();
    }
  }, {
    element: helper.e(".control-theme-style-light"),
    path: "theme.style",
    type: "radio",
    func: function() {
      render();
      accent.render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-active"),
    path: "theme.accent.random.active",
    type: "checkbox",
    func: function() {
      dependents();
      accent.render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-any"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-light"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-dark"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-pastel"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-random-style-saturated"),
    path: "theme.accent.random.style",
    type: "radio",
    func: function() {
      render();
    }
  }, {
    element: helper.e(".control-theme-accent-randomise"),
    type: "button",
    func: function() {
      accent.random();
      accent.render();
    }
  }, {
    element: helper.e(".control-background-image-show"),
    path: "background.image.show",
    type: "checkbox",
    func: function() {
      render();
      dependents();
      background.render();
      header.render();
    }
  }, {
    element: helper.e(".control-background-image-url"),
    path: "background.image.url",
    type: "text",
    func: function() {
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-opacity"),
    path: "background.image.opacity",
    type: "range",
    valueMod: ["reverse", "float"],
    func: function() {
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-grayscale"),
    path: "background.image.grayscale",
    type: "range",
    valueMod: ["float"],
    func: function() {
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-blur"),
    path: "background.image.blur",
    type: "range",
    func: function() {
      background.render();
    }
  }, {
    element: helper.e(".control-background-image-accent"),
    path: "background.image.accent",
    type: "range",
    valueMod: ["float"],
    func: function() {
      background.render();
    }
  }];

  var _bind = function() {
    var eventType = {
      button: "click",
      checkbox: "change",
      radio: "change",
      text: "input",
      range: "input",
      color: "change"
    };
    var valueType = {
      checkbox: function(object) {
        return object.element.checked;
      },
      radio: function(object) {
        return object.element.value;
      },
      text: function(object) {
        return object.element.value;
      },
      range: function(object) {
        return parseInt(object.element.value, 10);
      },
      color: function(object) {
        return helper.hexToRgb(object.element.value);
      }
    };
    var valueMod = {
      reverse: function(value, object) {
        return parseInt(object.element.max, 10) - value;
      },
      float: function(value, object) {
        return value / 100;
      }
    };
    var changeValue = function(object) {
      if (object.path) {
        var newValue = valueType[object.type](object);
        if (object.valueMod) {
          object.valueMod.forEach(function(arrayItem, index) {
            newValue = valueMod[arrayItem](newValue, object);
          });
        };
        helper.setObject({
          object: state.get(),
          path: object.path,
          newValue: newValue
        });
        // console.log(object.path, helper.getObject({
        //   object: state.get(),
        //   path: object.path
        // }));
      };
    };
    var bindControl = function(object) {
      var action = {
        input: function(object) {
          changeValue(object);
          if (object.func) {
            object.func();
          };
        },
        button: function(object) {
          if (object.func) {
            object.func();
          };
        }
      };
      object.element.addEventListener(eventType[object.type], function() {
        action[object.element.tagName.toLowerCase()](object);
        data.save();
      }, false);
      if (object.additionalEvents) {
        object.additionalEvents.forEach(function(item, index) {
          object.element.addEventListener(item.event, function() {
            item.action();
          }, false);
        });
      };
    };
    _allControl.forEach(function(arrayItem, index) {
      bindControl(arrayItem);
    });
  };

  var render = function() {
    var html = helper.e("html");
    var _menu = function() {
      helper.addClass(html, "is-menu");
    };
    var _edit = function() {
      if (state.get().bookmarks.edit) {
        helper.addClass(html, "is-bookmarks-edit");
        link.tabIndex();
      } else {
        helper.removeClass(html, "is-bookmarks-edit");
        link.tabIndex();
      };
    };
    var _date = function() {
      if (state.get().header.date.show.date || state.get().header.date.show.day || state.get().header.date.show.month || state.get().header.date.show.year) {
        helper.addClass(html, "is-header-date-show");
      } else {
        helper.removeClass(html, "is-header-date-show");
      };
    };
    var _clock = function() {
      if (state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours) {
        helper.addClass(html, "is-header-clock-show");
      } else {
        helper.removeClass(html, "is-header-clock-show");
      };
    };
    var _search = function() {
      if (state.get().header.search.show) {
        helper.addClass(html, "is-header-search-show");
      } else {
        helper.removeClass(html, "is-header-search-show");
      };
      if (state.get().header.search.grow) {
        helper.addClass(html, "is-header-search-grow");
      } else {
        helper.removeClass(html, "is-header-search-grow");
      };
      helper.e(".control-header-search-engine-custom-name").value = state.get().header.search.engine.custom.name;
      helper.e(".control-header-search-engine-custom-url").value = state.get().header.search.engine.custom.url;
    };
    var _alignment = function() {
      helper.removeClass(html, "is-header-alignment-horizontal-left");
      helper.removeClass(html, "is-header-alignment-horizontal-center");
      helper.removeClass(html, "is-header-alignment-horizontal-right");
      helper.removeClass(html, "is-header-alignment-vertical-top");
      helper.removeClass(html, "is-header-alignment-vertical-center");
      helper.removeClass(html, "is-header-alignment-vertical-bottom");
      helper.addClass(html, "is-header-alignment-horizontal-" + state.get().header.alignment.horizontal);
      helper.addClass(html, "is-header-alignment-vertical-" + state.get().header.alignment.vertical);
    };
    var _link = function() {
      var view = {
        block: function() {
          helper.addClass(html, "is-bookmarks-style-block");
          helper.removeClass(html, "is-bookmarks-style-list");
        },
        list: function() {
          helper.removeClass(html, "is-bookmarks-style-block");
          helper.addClass(html, "is-bookmarks-style-list");
        }
      };
      view[state.get().bookmarks.style]();
      if (state.get().bookmarks.link.show) {
        helper.addClass(html, "is-bookmarks-show-link");
      } else {
        helper.removeClass(html, "is-bookmarks-show-link");
      };
      if (state.get().bookmarks.name.show) {
        helper.addClass(html, "is-bookmarks-show-name");
      } else {
        helper.removeClass(html, "is-bookmarks-show-name");
      };
      if (state.get().bookmarks.url.show) {
        helper.addClass(html, "is-bookmarks-show-url");
      } else {
        helper.removeClass(html, "is-bookmarks-show-url");
      };
      var urlText = {
        dark: function() {
          helper.addClass(html, "bookmarks-url-dark");
          helper.removeClass(html, "bookmarks-url-light");
        },
        light: function() {
          helper.removeClass(html, "bookmarks-url-dark");
          helper.addClass(html, "bookmarks-url-light");
        }
      };
      urlText[state.get().bookmarks.url.style]();
    };
    var _layout = function() {
      if (state.get().layout.scrollPastEnd) {
        helper.addClass(html, "is-layout-scroll-past-end");
      } else {
        helper.removeClass(html, "is-layout-scroll-past-end");
      };
    };
    var _theme = function() {
      helper.removeClass(html, "is-theme-style-dark");
      helper.removeClass(html, "is-theme-style-light");
      helper.addClass(html, "is-theme-style-" + state.get().theme.style);
    };
    var _editAdd = function() {
      if (state.get().header.editAdd.show) {
        helper.addClass(html, "is-header-edit-add");
      } else {
        helper.removeClass(html, "is-header-edit-add");
      };
    };
    var _accent = function() {
      if (state.get().header.accent.show) {
        helper.addClass(html, "is-header-accent");
      } else {
        helper.removeClass(html, "is-header-accent");
      };
    };
    var _greeting = function() {
      if (state.get().header.greeting.show) {
        helper.addClass(html, "is-header-greeting");
      } else {
        helper.removeClass(html, "is-header-greeting");
      };
    };
    var _background = function() {
      if (state.get().background.image.show) {
        helper.addClass(html, "is-background-image-show");
      } else {
        helper.removeClass(html, "is-background-image-show");
      };
    };
    var _header = function() {
      if (state.get().header.shade.show) {
        helper.addClass(html, "is-header-shade-show");
        helper.addClass(html, "is-header-shade-style-" + state.get().header.shade.style);
        if (state.get().header.shade.border.top.show) {
          helper.addClass(html, "is-header-shade-border-top-show");
        } else {
          helper.removeClass(html, "is-header-shade-border-top-show");
        };
        if (state.get().header.shade.border.bottom.show) {
          helper.addClass(html, "is-header-shade-border-bottom-show");
        } else {
          helper.removeClass(html, "is-header-shade-border-bottom-show");
        };
      } else {
        helper.removeClass(html, "is-header-shade-show");
        helper.removeClass(html, "is-header-shade-style-always");
        helper.removeClass(html, "is-header-shade-style-scroll");
        helper.removeClass(html, "is-header-shade-border-top-show");
        helper.removeClass(html, "is-header-shade-border-bottom-show");
      };
    };
    _menu();
    _alignment();
    _edit();
    _greeting();
    _date();
    _clock();
    _search();
    _editAdd();
    _accent();
    _link();
    _layout();
    _theme();
    _background();
    _header();
  };

  var dependents = function() {
    var _edit = function() {
      if (bookmarks.get().length > 0) {
        helper.e(".control-edit").disabled = false;
      } else {
        helper.e(".control-edit").disabled = true;
        helper.e(".control-edit").checked = false;
      };
    };
    var _date = function() {
      var activeCount = 0;
      var toCheck = [state.get().header.date.show.date, state.get().header.date.show.day, state.get().header.date.show.month, state.get().header.date.show.year];
      toCheck.forEach(function(arrayItem, index) {
        if (arrayItem == true) {
          activeCount++;
        };
      });
      if (activeCount >= 2 && (state.get().header.date.show.date || state.get().header.date.show.day || state.get().header.date.show.month || state.get().header.date.show.year)) {
        helper.e(".control-header-date-show-separator").disabled = false;
      } else {
        helper.e(".control-header-date-show-separator").disabled = true;
      };
      if (state.get().header.date.show.day || state.get().header.date.show.month) {
        helper.e(".control-header-date-character-length-short").disabled = false;
        helper.e(".control-header-date-character-length-long").disabled = false;
      } else {
        helper.e(".control-header-date-character-length-short").disabled = true;
        helper.e(".control-header-date-character-length-long").disabled = true;
      };
    };
    var _greeting = function() {
      if (state.get().header.greeting.show) {
        helper.e("[for=control-header-greeting-name]").removeAttribute("disabled", "");
        helper.e(".control-header-greeting-name").disabled = false;
        helper.e(".control-header-greeting-type-good").disabled = false;
        helper.e(".control-header-greeting-type-hello").disabled = false;
        helper.e(".control-header-greeting-type-hi").disabled = false;
      } else {
        helper.e("[for=control-header-greeting-name]").setAttribute("disabled", "");
        helper.e(".control-header-greeting-name").disabled = true;
        helper.e(".control-header-greeting-type-good").disabled = true;
        helper.e(".control-header-greeting-type-hello").disabled = true;
        helper.e(".control-header-greeting-type-hi").disabled = true;
      };
    };
    var _clock = function() {
      var activeCount = 0;
      var toCheck = [state.get().header.clock.show.seconds, state.get().header.clock.show.minutes, state.get().header.clock.show.hours];
      toCheck.forEach(function(arrayItem, index) {
        if (arrayItem == true) {
          activeCount++;
        };
      });
      if (activeCount >= 2 && (state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours)) {
        helper.e(".control-header-clock-show-separator").disabled = false;
      } else {
        helper.e(".control-header-clock-show-separator").disabled = true;
      };
      if (state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours) {
        helper.e(".control-header-clock-24").disabled = false;
        helper.e(".control-header-clock-show-meridiem").disabled = false;
      } else {
        helper.e(".control-header-clock-24").disabled = true;
        helper.e(".control-header-clock-show-meridiem").disabled = true;
      };
      if ((state.get().header.clock.show.seconds || state.get().header.clock.show.minutes || state.get().header.clock.show.hours) && !state.get().header.clock.hour24) {
        helper.e(".control-header-clock-show-meridiem").disabled = false;
      } else {
        helper.e(".control-header-clock-show-meridiem").disabled = true;
      };
    };
    var _search = function() {
      if (state.get().header.search.show) {
        helper.e(".control-header-search-grow").disabled = false;
        helper.e(".control-header-search-focus").disabled = false;
        helper.e(".control-header-search-engine-google").disabled = false;
        helper.e(".control-header-search-engine-duckduckgo").disabled = false;
        helper.e(".control-header-search-engine-youtube").disabled = false;
        helper.e(".control-header-search-engine-giphy").disabled = false;
        helper.e(".control-header-search-engine-custom").disabled = false;
        helper.e(".control-header-search-engine-label").removeAttribute("disabled");
      } else {
        helper.e(".control-header-search-grow").disabled = true;
        helper.e(".control-header-search-focus").disabled = true;
        helper.e(".control-header-search-engine-google").disabled = true;
        helper.e(".control-header-search-engine-duckduckgo").disabled = true;
        helper.e(".control-header-search-engine-youtube").disabled = true;
        helper.e(".control-header-search-engine-giphy").disabled = true;
        helper.e(".control-header-search-engine-custom").disabled = true;
        helper.e(".control-header-search-engine-label").setAttribute("disabled", "");
      };
      if (state.get().header.search.show && state.get().header.search.engine.selected === "custom") {
        helper.e("[for=control-header-search-engine-custom-name]").removeAttribute("disabled");
        helper.e(".control-header-search-engine-custom-name").disabled = false;
        helper.e("[for=control-header-search-engine-custom-url]").removeAttribute("disabled");
        helper.e(".control-header-search-engine-custom-url").disabled = false;
      } else {
        helper.e("[for=control-header-search-engine-custom-name]").setAttribute("disabled", "");
        helper.e(".control-header-search-engine-custom-name").disabled = true;
        helper.e("[for=control-header-search-engine-custom-url]").setAttribute("disabled", "");
        helper.e(".control-header-search-engine-custom-url").disabled = true;
      };
    };
    var _theme = function() {
      if (state.get().theme.accent.random.active) {
        helper.eA("input[name='control-theme-accent-random-style']").forEach(function(arrayItem, index) {
          arrayItem.disabled = false;
          helper.e(".control-theme-accent-randomise").disabled = false;
        });
      } else {
        helper.eA("input[name='control-theme-accent-random-style']").forEach(function(arrayItem, index) {
          arrayItem.disabled = true;
          helper.e(".control-theme-accent-randomise").disabled = true;
        });
      };
    };
    var _link = function() {
      if (state.get().bookmarks.link.show) {
        helper.e(".control-bookmarks-name-show").disabled = false;
        helper.e(".control-bookmarks-url-show").disabled = false;
        helper.e(".control-bookmarks-style-block").disabled = false;
        helper.e(".control-bookmarks-style-list").disabled = false;
        helper.e(".control-bookmarks-new-tab").disabled = false;
        helper.e(".control-bookmarks-sort-none").disabled = false;
        helper.e(".control-bookmarks-sort-name").disabled = false;
        helper.e(".control-bookmarks-sort-letter").disabled = false;
        helper.e(".control-layout-alignment-vertical-top").disabled = true;
        helper.e(".control-layout-alignment-vertical-center").disabled = true;
        helper.e(".control-layout-alignment-vertical-bottom").disabled = true;
      } else {
        helper.e(".control-bookmarks-name-show").disabled = true;
        helper.e(".control-bookmarks-url-show").disabled = true;
        helper.e(".control-bookmarks-style-block").disabled = true;
        helper.e(".control-bookmarks-style-list").disabled = true;
        helper.e(".control-bookmarks-new-tab").disabled = true;
        helper.e(".control-bookmarks-sort-none").disabled = true;
        helper.e(".control-bookmarks-sort-name").disabled = true;
        helper.e(".control-bookmarks-sort-letter").disabled = true;
        helper.e(".control-layout-alignment-vertical-top").disabled = false;
        helper.e(".control-layout-alignment-vertical-center").disabled = false;
        helper.e(".control-layout-alignment-vertical-bottom").disabled = false;
      };
      if (state.get().bookmarks.link.show && state.get().bookmarks.url.show) {
        helper.e(".control-bookmarks-url-style-dark").disabled = false;
        helper.e(".control-bookmarks-url-style-light").disabled = false;
      } else {
        helper.e(".control-bookmarks-url-style-dark").disabled = true;
        helper.e(".control-bookmarks-url-style-light").disabled = true;
      }
    };
    var _background = function() {
      if (state.get().background.image.show) {
        helper.e("[for=control-background-image-url]").removeAttribute("disabled");
        helper.e(".control-background-image-url").disabled = false;
        helper.e("[for=control-background-image-opacity]").removeAttribute("disabled");
        helper.e(".control-background-image-opacity").disabled = false;
        helper.e("[for=control-background-image-blur]").removeAttribute("disabled");
        helper.e(".control-background-image-blur").disabled = false;
        helper.e("[for=control-background-image-grayscale]").removeAttribute("disabled");
        helper.e(".control-background-image-grayscale").disabled = false;
        helper.e("[for=control-background-image-accent]").removeAttribute("disabled");
        helper.e(".control-background-image-accent").disabled = false;
      } else {
        helper.e("[for=control-background-image-url]").setAttribute("disabled", "");
        helper.e(".control-background-image-url").disabled = true;
        helper.e("[for=control-background-image-opacity]").setAttribute("disabled", "");
        helper.e(".control-background-image-opacity").disabled = true;
        helper.e("[for=control-background-image-blur]").setAttribute("disabled", "");
        helper.e(".control-background-image-blur").disabled = true;
        helper.e("[for=control-background-image-grayscale]").setAttribute("disabled", "");
        helper.e(".control-background-image-grayscale").disabled = true;
        helper.e("[for=control-background-image-accent]").setAttribute("disabled", "");
        helper.e(".control-background-image-accent").disabled = true;
      };
    };
    var _header = function() {
      if (state.get().header.shade.show) {
        helper.e(".control-header-shade-style-always").disabled = false;
        helper.e(".control-header-shade-style-scroll").disabled = false;
        helper.e("[for=control-header-shade-opacity]").removeAttribute("disabled");
        helper.e(".control-header-shade-opacity").disabled = false;
        helper.e("[for=control-header-shade-padding-top]").removeAttribute("disabled");
        helper.e(".control-header-shade-padding-top").disabled = false;
        helper.e("[for=control-header-shade-padding-bottom]").removeAttribute("disabled");
        helper.e(".control-header-shade-padding-bottom").disabled = false;
        helper.e(".control-header-shade-border-top-show").disabled = false;
        helper.e(".control-header-shade-border-bottom-show").disabled = false;
        helper.e("[for=control-header-shade-border-top-width]").removeAttribute("disabled");
        helper.e(".control-header-shade-border-top-width").disabled = false;
        helper.e("[for=control-header-shade-border-bottom-width]").removeAttribute("disabled");
        helper.e(".control-header-shade-border-bottom-width").disabled = false;
      } else {
        helper.e(".control-header-shade-style-always").disabled = true;
        helper.e(".control-header-shade-style-scroll").disabled = true;
        helper.e("[for=control-header-shade-opacity]").setAttribute("disabled", "");
        helper.e(".control-header-shade-opacity").disabled = true;
        helper.e("[for=control-header-shade-padding-top]").setAttribute("disabled", "");
        helper.e(".control-header-shade-padding-top").disabled = true;
        helper.e("[for=control-header-shade-padding-bottom]").setAttribute("disabled", "");
        helper.e(".control-header-shade-padding-bottom").disabled = true;
        helper.e(".control-header-shade-border-top-show").disabled = true;
        helper.e(".control-header-shade-border-bottom-show").disabled = true;
        helper.e("[for=control-header-shade-border-top-width]").setAttribute("disabled", "");
        helper.e(".control-header-shade-border-top-width").disabled = true;
        helper.e("[for=control-header-shade-border-bottom-width]").setAttribute("disabled", "");
        helper.e(".control-header-shade-border-bottom-width").disabled = true;
      };
      if (state.get().header.shade.show && state.get().header.shade.border.top.show) {
        helper.e("[for=control-header-shade-border-top-width]").removeAttribute("disabled");
        helper.e(".control-header-shade-border-top-width").disabled = false;
      } else {
        helper.e("[for=control-header-shade-border-top-width]").setAttribute("disabled", "");
        helper.e(".control-header-shade-border-top-width").disabled = true;
      };
      if (state.get().header.shade.show && state.get().header.shade.border.bottom.show) {
        helper.e("[for=control-header-shade-border-bottom-width]").removeAttribute("disabled");
        helper.e(".control-header-shade-border-bottom-width").disabled = false;
      } else {
        helper.e("[for=control-header-shade-border-bottom-width]").setAttribute("disabled", "");
        helper.e(".control-header-shade-border-bottom-width").disabled = true;
      };
    };
    _edit();
    _greeting();
    _date();
    _clock();
    _search();
    _theme();
    _link();
    _background();
    _header();
  };

  var update = function() {
    var valueMod = {
      reverse: function(value, element) {
        return parseInt(element.max, 10) - value;
      },
      float: function(value, element) {
        return value * 100;
      }
    };
    var setValue = {
      checkbox: function(object) {
        object.element.checked = helper.getObject({
          object: state.get(),
          path: object.path
        });
      },
      radio: function(object) {
        helper.e("." + object.element.className.substring(0, object.element.className.lastIndexOf("-") + 1) + helper.getObject({
          object: state.get(),
          path: object.path
        })).checked = true;
      },
      text: function(object) {
        object.element.value = helper.getObject({
          object: state.get(),
          path: object.path
        });
      },
      range: function(object) {
        var newValue = helper.getObject({
          object: state.get(),
          path: object.path
        });
        if (object.valueMod) {
          object.valueMod.slice().reverse().forEach(function(arrayItem, index) {
            newValue = valueMod[arrayItem](newValue, object.element);
          });
        };
        object.element.value = newValue;
      },
      color: function(object) {
        object.element.value = helper.rgbToHex(helper.getObject({
          object: state.get(),
          path: object.path
        }));
      }
    };
    _allControl.forEach(function(arrayItem, index) {
      if (arrayItem.element.tagName.toLowerCase() == "input") {
        setValue[arrayItem.type](arrayItem);
      };
    });
  };

  var init = function() {
    _bind();
    update();
    dependents();
    render();
  };

  // exposed methods
  return {
    init: init,
    render: render,
    dependents: dependents,
    update: update
  };

})();
