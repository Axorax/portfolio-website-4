export const blog = {
  view: function () {
    return m(
      "main",
      {
        id: "particles_background",
      },
      m(
        "button",
        {
          class: "to_top_btn",
          onclick: () => {
            document.querySelector(".wrapper").scrollTo(0, 0);
          },
        },
        m("img", {
          src: "./icons/acu.svg",
        }),
      ),
      m(
        "div",
        {
          class: "wrapper blog",
        },
        [
          m(
            "h1",
            {
              class: "magictime boingInUp wrapper_title",
            },
            "Axorax",
          ),
          m(
            "div",
            {
              class: "back_btn_wrapper",
            },
            [
              m(
                "a",
                {
                  href: "#!/main",
                  class: "back_btn",
                },
                [
                  m(
                    "button",
                    [
                      m("img", {
                        src: "./icons/back_arrow.svg",
                      }),
                    ],
                    "BACK",
                  ),
                ],
              ),
            ],
          ),
          m(
            "div",
            {
              class: "blog_title",
            },
            [
              m("img", {
                src: "./icons/description_icon.svg",
              }),
              m("span", "Blog Articles"),
              m("img", {
                src: "./icons/description_icon.svg",
              }),
            ],
          ),
          m(
            "div",
            {
              class: "blog_items",
            },
            [
              m(
                "a",
                {
                  href: "?n=one-line-python-calculator#!/article",
                },
                m("button", "One line Python calculator"),
              ),
            ],
          ),
        ], // wrapper items end
      ),
    );
  },
};
