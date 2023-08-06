export const about = {
  view: function () {
    return m(
      "main",
      {
        id: "particles_background",
      },
      m(
        "div",
        {
          class: "wrapper",
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
              class: "about",
            },
            [
              m(
                "p",
                {
                  class: "about_title",
                },
                "About me:",
              ),
              m(
                "p",
                "Hello! I'm Axorax. I like to make websites, YouTube videos, games, music and more!",
              ),
              m("br"),
              m(
                "p",
                "I enjoy studying science, programming and playing chess. I always appreciate feedback whether it is good or bad!",
              ),
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
                    "Back",
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  },
};
