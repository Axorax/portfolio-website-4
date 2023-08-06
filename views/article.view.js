import { load_article } from "../articles.js";

export const article = {
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
                  href: "#!/blog",
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
              oninit: () => {
                setTimeout(() => {
                  document.querySelector(".blog_title").innerHTML =
                    load_article().title;
                });
              },
            },
            "One line calc",
          ),
          m("div", {
            class: "article_content",
            oninit: () => {
              setTimeout(() => {
                document.querySelector(".article_content").innerHTML =
                  load_article().content;
              });
            },
          }),
        ],
      ),
    );
  },
};
