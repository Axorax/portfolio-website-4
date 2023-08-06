export const main = {
  view: function () {
    return m(
      "main",
      {
        id: "particles_background",
      },
      m(
        "div",
        {
          class: "wrapper homepage",
        },
        [
          m(
            "h1",
            {
              class: "magictime boingInUp wrapper_title",
            },
            "Axorax",
          ),
          m("div.main_wrapper", [
            m(
              "div",
              {
                class: "button_group homepage_btns",
              },
              [
                m("div.btn_tog_container", [
                  m("div.btn_tog", [
                    m("div.btn_tog_wrapper", [
                      m(
                        "a",
                        {
                          href: "https://axorax.github.io/",
                          target: "_blank",
                        },
                        [
                          m("button.website", [
                            m("img", {
                              src: "./icons/website.svg",
                            }),
                          ]),
                        ],
                      ),
                      m(
                        "a",
                        {
                          href: "https://github.com/axorax",
                          target: "_blank",
                        },
                        [
                          m("button", [
                            m("img", {
                              src: "./icons/github.svg",
                            }),
                          ]),
                        ],
                      ),
                      m(
                        "a",
                        {
                          href: "https://www.youtube.com/axorax",
                          target: "_blank",
                        },
                        [
                          m("button", [
                            m("img", {
                              src: "./icons/youtube_icon.png",
                            }),
                          ]),
                        ],
                      ),
                    ]),
                  ]),
                  m("div.btn_tog", [
                    m("div.btn_tog_wrapper", [
                      m(
                        "a",
                        {
                          href: "https://www.fiverr.com/axorax",
                          target: "_blank",
                        },
                        [
                          m("button.img-l.fwq", [
                            m("img", {
                              src: "./icons/fiverr.svg",
                            }),
                          ]),
                        ],
                      ),
                      m(
                        "a",
                        {
                          href: "https://www.reddit.com/user/axorax",
                          target: "_blank",
                        },
                        [
                          m("button", [
                            m("img", {
                              src: "./icons/reddit.svg",
                            }),
                          ]),
                        ],
                      ),
                      m(
                        "a",
                        {
                          href: "https://www.chess.com/member/axorax",
                          target: "_blank",
                        },
                        [
                          m("button", [
                            m("img", {
                              src: "./icons/chessboard.png",
                            }),
                          ]),
                        ],
                      ),
                    ]),
                  ]),
                  m("div.btn_tog", [
                    m("div.btn_tog_wrapper", [
                      m(
                        "a",
                        {
                          href: "https://www.patreon.com/axorax",
                          target: "_blank",
                        },
                        [
                          m("button.fwq.img-m", [
                            m("img", {
                              src: "./icons/patreon.svg",
                            }),
                          ]),
                        ],
                      ),
                      m(
                        "a",
                        {
                          href: "https://axorax.itch.io/",
                          target: "_blank",
                        },
                        [
                          m("button.img-m", [
                            m("img", {
                              src: "./icons/itch-io.svg",
                            }),
                          ]),
                        ],
                      ),
                      m(
                        "a",
                        {
                          href: "https://discord.gg/nKUFghjXQu",
                          target: "_blank",
                        },
                        [
                          m("button.fwq.img-m", [
                            m("img", {
                              src: "./icons/discord.png",
                            }),
                          ]),
                        ],
                      ),
                    ]),
                  ]),
                ]),

                m(
                  "a",
                  {
                    href: "#!/blog",
                  },
                  [
                    m(
                      "button",
                      [
                        m("img", {
                          src: "./icons/description_icon.svg",
                        }),
                      ],
                      "Blog",
                    ),
                  ],
                ),
                m(
                  "a",
                  {
                    href: "#!/about",
                  },
                  [
                    m(
                      "button",
                      {
                        class: "about_button",
                      },
                      [
                        m("img", {
                          src: "./icons/account_circle.svg",
                        }),
                      ],
                      "About me",
                    ),
                  ],
                ),
              ],
            ),
          ]),
        ],
      ),
    );
  },
};
