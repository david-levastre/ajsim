function loop() {
    "use strict";

    function e(e) {
        console.log("rndmIDgnrtr() start");
        const n = Math.floor(1000000001),
            t = Math.ceil(1);
        if (void 0 === e) {
            return Math.floor(Math.random() * (n - t)) + t
        }
        var s, o = [];
        for (s = 0; s < e; s++) o[s] = Math.floor(Math.random() * (n - t)) + t;
        return o
    }

    function n(e) {
        var n, t, s;
        return n = e.gnrtdID, this.id = n, this.apj = void 0, t = {
            fr: void 0,
            eu: void 0,
            autre: void 0,
            qual: !1
        }, this.nat = t, s = {
            fr: void 0,
            eu: void 0,
            dan: void 0,
            eu_dom: void 0,
            autre: void 0,
            hab: void 0,
            reg: void 0,
            qual: !1
        }, this.res = s, this.adresse = void 0, console.log(this), console.log("Demandeur() constructor end"), this
    }

    function t(e, n) {
        return console.log("Questions() constructor start"), this.pm = function() {
            console.log("pm() start");
            const t = {
                question: {
                    txt: "Le demandeur est-il une personne physique ou une personne morale ?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Personne physique",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.pm = !1, a.qualify()
                        },
                        matches: ["personne physique", "physique", "pp"]
                    },
                    choice2: {
                        value: "Personne morale",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.pm = !0, a.qualify()
                        },
                        matches: ["personne morale", "morale", "pm"]
                    },
                    choice3: {
                        value: "Aide",
                        type: "button",
                        class: "inlog_btn help_btn",
                        handler: function() {
                            e.printTxt("Une personne morale est une entité juridique abstraite à la différence d'une personne physique qui est un être humain.", "help"), a.qualify()
                        },
                        matches: ["Aide", "aide", "?"]
                    }
                },
                self: function() {
                    return this
                }
            };
            void 0 === n.pm && e.question(t), console.log(t), console.log("pm() end")
        }, this.apj = function() {
            console.log("apj() start");
            const t = {
                question: {
                    txt: "Les dépenses que le demandeur souhaite faire couvrir par l'aide juridictionnelle sont-elles par ailleurs prises en charge au titre d'un contrat d'assurance de protection juridique ou tout autre système de protection équivalent ?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        name: "apj_ddList",
                        values: ["Totalement", "Partiellement", "Non"],
                        options: ["Oui, totalement", "Oui, partiellement", "Non"],
                        type: "ddList",
                        class: "inlog_ddlist",
                        handlers: [function() {
                            n.apj = "totale", a.qualify()
                        }, function() {
                            n.apj = "partielle", a.qualify()
                        }, function() {
                            n.apj = "aucune", a.qualify()
                        }]
                    },
                    choice2: {
                        value: "Aide",
                        type: "button",
                        class: "inlog_btn help_btn",
                        handler: function() {
                            e.printTxt("La couverture d’un contrat d’assurance de protection juridique peut être vérifiée en consultant les contrats d’assurance ou en interrogeant l'assureur. Les assurances de protection juridique peuvent être incluses dans différentes polices, notamment l’assurance habitation, l’assurance automobile et les contrats de cartes de crédit.", "help"), a.qualify()
                        },
                        matches: ["Aide", "aide", "?"]
                    }
                },
                self: function() {
                    return this
                }
            };
            void 0 === n.apj && !1 === n.pm && e.question(t), console.log(t), console.log("apj() end")
        }, this.nat_fr = function() {
            console.log("nat_fr() start");
            const t = {
                question: {
                    txt: "Le demandeur est-il de nationalité française ?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.nat.fr = !0, n.nat.eu = !0, n.nat.autre = !1, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.nat.fr = !1, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    }
                },
                self: function() {
                    return this
                }
            };
            void 0 === n.nat.fr && !1 === n.pm && !0 === n.cond_sub && e.question(t), console.log(t), console.log("nat_fr() end")
        }, this.nat_eu = function() {
            console.log("nat_eu() start");
            const t = {
                question: {
                    txt: "Le demandeur est-il citoyen d'un État-membre de l'Union européenne autre que la France ?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.nat.eu = !0, n.nat.autre = !1, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.nat.eu = !1, n.nat.autre = !0, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    },
                    choice3: {
                        value: "Aide",
                        type: "button",
                        class: "inlog_btn help_btn",
                        handler: function() {
                            e.printTxt("Les 27 autres États membres de l'Union sont : l'Allemagne, l'Autriche, la Belgique, la Bulgarie, Chypre, la Croatie, le Danemark, l'Espagne, l'Estonie, la Finlande, la Grèce, la Hongrie, l'Irlande, l'Italie, la Lettonie, la Lituanie, le Luxembourg, Malte, les Pays-Bas, la Pologne, le Portugal, la République tchèque, la Roumanie, le Royaume-Uni, la Slovaquie, la Slovénie et la Suède.", "help"), a.qualify()
                        },
                        matches: ["Aide", "aide", "?"]
                    }
                },
                self: function() {
                    return this
                }
            };
            !1 === n.nat.fr && void 0 === n.nat.eu && void 0 === n.nat.autre && e.question(t), console.log(t), console.log("nat_eu() end")
        }, this.res_fr = function() {
            console.log("res_fr() start");
            const t = {
                question: {
                    txt: "Le demandeur réside-t-il en France ?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.fr = !0, n.res.eu = !0, n.res.dan = !1, n.res.autre = !1, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.fr = !1, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    }
                },
                self: function() {
                    return this
                }
            };
            !1 === n.nat.fr && !1 === n.nat.eu && !1 === n.res.qual && void 0 === n.res.fr && e.question(t), console.log(t), console.log("res_fr() end")
        }, this.res_eu = function() {
            console.log("res_eu() start");
            const t = {
                question: {
                    txt: "Le demandeur réside-t-il sur le territoire d'un autre État-membre de l'Union européenne ?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.eu = !0, n.res.autre = !1, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.eu = !1, n.res.dan = !1, n.res.autre = !0, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    },
                    choice3: {
                        value: "Aide",
                        type: "button",
                        class: "inlog_btn help_btn",
                        handler: function() {
                            e.printTxt("Les 27 autres États membres sont l'Allemagne, l'Autriche, la Belgique, la Bulgarie, Chypre, la Croatie, le Danemark, l'Espagne, l'Estonie, la Finlande, la Grèce, la Hongrie, l'Irlande, l'Italie, la Lettonie, la Lituanie, le Luxembourg, Malte, les Pays-Bas, la Pologne, le Portugal, la République tchèque, la Roumanie, le Royaume-Uni, la Slovaquie, la Slovénie et la Suède.", "help"), a.qualify()
                        },
                        matches: ["Aide", "aide", "?"]
                    }
                },
                self: function() {
                    return this
                }
            };
            !0 === n.nat.qual && !1 === n.nat.fr && !1 === n.nat.eu && !1 === n.res.fr && void 0 === n.res.eu && e.question(t), console.log(t), console.log("res_eu() end")
        }, this.res_dan = function() {
            console.log("res_dan() start");
            const t = {
                question: {
                    txt: "Le demandeur réside-t-il au Danemark?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.dan = !0, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.dan = !1, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    }
                },
                self: function() {
                    return this
                }
            };
            !1 === n.res.fr && !0 === n.res.eu && void 0 === n.res.dan && e.question(t), console.log(t), console.log("res_dan() end")
        }, this.res_hab = function() {
            console.log("res_hab() start");
            var t = {
                question: {
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.hab = !0, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.hab = !1, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    },
                    choice3: {
                        value: "Aide",
                        type: "button",
                        class: "inlog_btn help_btn",
                        handler: function() {
                            e.printTxt("L'habitude de la résidence est établie lorsque le demandeur a fixé, avec la volonté de lui conférer un caractère stable, le centre permanent ou habituel de ses intérêts en France.", "help"), a.qualify()
                        },
                        matches: ["Aide", "aide", "?"]
                    }
                },
                self: function() {
                    return this
                }
            };
            !0 === n.res.fr ? t.question.txt = "Le demandeur réside-t-il habituellement en France?" : !1 === n.res.fr && !0 === n.res.eu ? t.question.txt = "Le demandeur réside-t-il habituellement dans un autre État-membre de l'Union européenne?" : !0 === n.res.autre ? t.question.txt = "Le demandeur réside-t-il habituellement dans un autre État non membre de l'Union européenne?" : t.question.txt = "La résidence du demandeur est-elle habituelle ?", void 0 === n.res.hab && !0 === n.nat.autre && (!0 === n.res.fr || !0 === n.res.eu && !1 === n.res.dan) && e.question(t), console.log(t), console.log("res_hab() end")
        }, this.res_reg = function() {
            console.log("res_reg() start");
            var t = {
                question: {
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.reg = !0, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.reg = !1, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    },
                    choice3: {
                        value: "Aide",
                        type: "button",
                        class: "inlog_btn help_btn",
                        handler: function() {
                            e.printTxt("La régularité de la résidence s'entend de l'existence d'un titre ou d'un document de séjour en cours de validité au profit du demandeur. Pour plus d'information vous pouvez consulter <a href='https://www.service-public.fr/particuliers/vosdroits/N110' target='_blank'>la page service-public.fr relative aux titres, documents de séjour et de circulation des étrangers</a>.", "help"), a.qualify()
                        },
                        matches: ["Aide", "aide", "?"]
                    }
                },
                self: function() {
                    return this
                }
            };
            !0 === n.res.fr ? t.question.txt = "Le demandeur réside-t-il régulièrement en France?" : !0 === n.res.eu && (t.question.txt = "Le demandeur réside-t-il régulièrement dans un autre État-membre de l'Union européenne?"), void 0 === n.res.hab || void 0 !== n.res.reg || !0 !== n.nat.autre || !0 !== n.res.fr && !0 !== n.res.eu || e.question(t), console.log(t), console.log("res_reg() end")
        }, this.res_eu_dom = function() {
            console.log("res_eu_dom() start");
            var t = {
                question: {
                    txt: "Le demandeur a-t-il son domicile dans un autre État-membre de l'Union européenne ?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.eu_dom = !0, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.res.eu_dom = !1, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    },
                    choice3: {
                        value: "Aide",
                        type: "button",
                        class: "inlog_btn help_btn",
                        handler: function() {
                            e.printTxt("Le domicile est le lieu dans lequel une personne possède son principal établissement. Il est différent de la résidence qui est une situation de fait.", "help"), a.qualify()
                        },
                        matches: ["Aide", "aide", "?"]
                    }
                },
                self: function() {
                    return this
                }
            };
            void 0 !== n.res.eu_dom || !1 !== n.res.fr || !0 !== n.res.eu || !1 !== n.res.dan || !1 !== n.res.hab && !1 !== n.res.reg || void 0 === n.res.hab || void 0 === n.res.reg || e.question(t), console.log(t), console.log("res_eu_dom() end")
        }, this.exception_cond_res = function() {
            console.log("exception_cond_res() start");
            const t = {
                question: {
                    txt: "Le demandeur est-il concerné par l'une des situations suivantes ?<br/> Le demandeur :<br/> - est mineur;<br/>- est témoin assisté;<br/> - est mis en examen;<br/> - est prévénu;</br> - est accusé;</br> - est condamné;<br/> - est partie-civile;<br/> - bénéficie d'une ordonnance de protection;<br/> - fait l'objet d'une procédure de comparution sur reconnaissance préalable de culpabilité;<br/> - fait l'objet de l'une des procédures prévues aux articles L. 222-1 à L. 222-6, L. 312-2, L. 511-1, L. 511-3-1, L. 511-3-2, L. 512-1 à L. 512-4, L. 522-1, L. 522-2, L. 552-1 à L. 552-10 et L. 742-4 du code de l'entrée et du séjour des étrangers et du droit d'asile;<br/> - fait appel d'une décision mentionnée aux articles L. 512-1 à L. 512-4 du même code.",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.exception_cond_res = !0, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.exception_cond_res = !1, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    }
                },
                self: function() {
                    return this
                }
            };
            void 0 === n.exception_cond_res && !1 === n.cond_res && e.question(t), console.log(t), console.log("exception_cond_res() end")
        }, this.l_art3_al5_cnda = function() {
            console.log("l_art3_al5_cnda() start");
            const t = {
                question: {
                    txt: "Le demandeur souhaite-t-il former un recours contre une décision de l'office français de protection des réfugiès et apatrides (OFPRA) auprès de la Cour nationale du droit d'asile (CNDA)?",
                    class: "",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.recours_cnda = !0, a.qualify()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            n.recours_cnda = !1, a.qualify()
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    }
                },
                self: function() {
                    return this
                }
            };
            void 0 === n.recours_cnda && !0 === n.nat.autre && !0 === n.res.fr && !0 === n.res.hab && !1 === n.res.reg && !1 === n.exception_cond_res && e.question(t), console.log(t), console.log("l_art3_al5_cnda() end")
        }, this.transfrontalier = function() {}, console.log(this), console.log("Questions() constructor end"), this
    }

    function s(e) {
        console.log("test() start");
        var n;
        return !0 === e.pm && (n = function() {
                r.printTxt("Le présent simulateur est destiné exclusivement aux personnes physiques. Pour tout renseignement sur l'éligibilité d'une personne morale à l'aide juridictionnelle veuillez vous rapprocher du tribunal de grande instance compétent pour traiter la demande.", "text-error"), r.printTxt("Redémarrage du simulateur dans 30000 ms.", "text-warning"), setTimeout(i, 3e4)
            }), console.log("test_cond_sub() start"), "partielle" === e.apj || "aucune" === e.apj ? (e.cond_sub = !0, $("#condsub_span").html("&#9745;")) : "totale" === e.apj ? (e.cond_sub = !1, n = function() {
                $("#condsub_span").html("&#9746;"), r.printTxt("En application du dernier alinéa de <a href='https://www.legifrance.gouv.fr/affichTexteArticle.do;jsessionid=647B38266A65C568420C19A2EB382C67.tplgfr22s_2?idArticle=LEGIARTI000006491176&cidTexte=LEGITEXT000006077779&dateTexte=20171003' target='_blank'>l'article 2 de la loi n°91-647 relative à l'aide juridique</a> : <cite>&laquo; L'aide juridictionnelle n'est pas accordée lorsque les frais couverts par cette aide sont pris en charge au titre d'un contrat d'assurance de protection juridique ou d'un système de protection. &raquo;</cite>"), r.printTxt("Le demandeur est inéligible à l'aide juridictionnelle.", "text-warning"), r.printTxt("Redémarrage du simulateur dans 30000 ms.", "text-warning"), setTimeout(i, 3e4)
            }) : e.cond_sub = void 0, console.log("test_cond_sub() end"),
            function() {
                switch (console.log("test_res() start"), (!0 === e.nat.fr || !1 === e.nat.fr && !0 === e.nat.eu) && !0 === e.res.fr && (e.res.reg = !0), void 0 !== e.nat.fr && void 0 !== e.nat.eu && void 0 !== e.nat.autre && (e.nat.qual = !0), void 0 !== e.res.fr && void 0 !== e.res.eu && void 0 !== e.res.dan && void 0 !== e.res.autre && void 0 !== e.res.hab && void 0 !== e.res.reg ? e.res.qual = !0 : !0 === e.nat.fr || !0 === e.nat.eu ? e.res.qual = !0 : !0 === e.nat.autre && !0 === e.res.dan ? e.res.qual = !0 : !0 === e.nat.autre && !0 === e.res.fr && !0 === e.res.hab && !0 === e.res.reg ? e.res.qual = !0 : !0 === e.nat.autre && !0 === e.res.autre && (e.res.qual = !0), !0 === e.nat.qual && !0 === e.res.qual ? !0 === e.nat.fr || !1 === e.nat.fr && !0 === e.nat.eu ? e.cond_res = !0 : !0 === e.nat.autre && (!0 === e.res.fr || !0 === e.res.eu && !1 === e.res.dan) && !0 === e.res.hab && !0 === e.res.reg ? e.cond_res = !0 : !0 === e.nat.autre && !0 === e.exception_cond_res ? e.cond_res = !0 : !0 === e.nat.autre && !1 === e.exception_cond_res && !0 === e.res.fr && !0 === e.res.hab && !1 === e.res.reg && !0 === e.recours_cnda ? e.cond_res = !0 : !0 === e.res.eu_dom ? e.cond_res = !0 : e.cond_res = !1 : e.cond_res = void 0, e.cond_res) {
                    case !0:
                        $("#condres_span").html("&#9745;");
                        break;
                    case !1:
                        $("#condres_span").html("&#9746;")
                }
                console.log("demandeur.cond_res = " + e.cond_res), console.log("test_res() end")
            }(), console.log("test() end"), n
    }

    function o(o) {
        var i, a, r;
        i = e(), a = new n({
            gnrtdID: i
        }), r = new t(o, a), this.qualify = function() {
            console.log("qualify() start");
            var e, n;
            for (e in r)
                if (r.hasOwnProperty(e) && (console.log(r[e]), r[e](), void 0 !== (n = s(a)))) {
                    n();
                    break
                }
            console.log(a), console.log("qualify() end")
        }
    }

    function i() {
        function e() {
            console.log("caution() start");
            const e = {
                question: {
                    txt: "Le présent simulateur a pour objet d'estimer les droits à l'aide juridictionnelle. Cette estimation est indicative et n'engage pas les services de l'État compétents pour statuer sur une demande d'aide.<br/> Le simulateur est en version alpha, il n'est donc pas terminé. Toutefois, il permet pour l'instant d'estimer les conditions d'éligibilité suivantes : de subsidiarité et de résidence.",
                    class: "text-warning",
                    cls: !1
                },
                answers: {
                    choice1: {
                        value: "J'ai compris",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            (a = new o(r)).qualify()
                        },
                        matches: ["Je comprends", "J'ai compris", "oui", "ouais", "wesh", "yes"]
                    }
                },
                self: function() {
                    return this
                }
            };
            r.question(e), console.log(e), console.log("caution() end")
        }! function() {
            console.log("startQ() start"), $(".bbox").html("&#9744;");
            const n = {
                question: {
                    txt: "Souhaitez-vous démarrer une simulation ?",
                    class: "",
                    cls: !0
                },
                answers: {
                    choice1: {
                        value: "Oui",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            e()
                        },
                        matches: ["Oui", "oui", "Ouais", "ouais", "wesh", "yes"]
                    },
                    choice2: {
                        value: "Non",
                        type: "button",
                        class: "inlog_btn",
                        handler: function() {
                            r.printTxt("Redémarrage dans 5000 ms.", "text-warning"), setTimeout(i, 5e3)
                        },
                        matches: ["Non", "non", "no", "No", "nope", "nan"]
                    }
                },
                self: function() {
                    return this
                }
            };
            r.question(n), console.log(n), console.log("startQ() end")
        }()
    }
    console.log("use strict"), console.log("loop() start");
    var a, r;
    new function() {
        console.log("Session() constructor start"), this.id = e(), this.startDate = new Date, console.log(this), console.log("Session() constructor end")
    }, i(r = new function() {
        return console.log("UI() constructor start"), this.registre = $("#registre"), this.promptHtml = "<span id='ip'><input type='text' class='inputprompt' id='caret' placeholder='>' autocomplete='off'/><input type='reset' class='reset' value='x' onclick='ui.cancel();'/></span>", this.btn_yn = function(e) {
            return [this.btn("Oui", e[0], "inlog_btn"), this.btn("Non", e[1], "inlog_btn")]
        }, this.lnk_yn = function(e) {
            return `<a href='javascript:void(0);' id='${e[0]}'>Oui /</a><a href='javascript:void(0);' id='${e[1]}'> Non</a>`
        }, this.btn = function(e, n, t, s) {
            return `<input type="button" value="${e}" id="${n}" class="gnrtdBtn ${t}" onclick="${s}"></input>`
        }, this.lnk = function(e, n, t, s, o, i, a, r) {
            return `<a id="${n}" class="${t}" onclick="${s}" ${o} href="${i}" target="${a}" type="${r}">${e}</a>`
        }, this.ddList = function(e, n, t, s, o) {
            var i = "<option selected disabled>Sélectionnez une réponse</option>";
            for (let e = 0; e < o.length; e++) i += `<option value="${s[e]}">${o[e]}</option>`, console.log(i);
            return `<select name="${e}" id="${n}" class="${t}">${i}</select>`
        }, this.cancel = function() {
            $("#caret").focus()
        }, this.fToggleOptions = {
            duration: 200,
            easing: "linear",
            queue: !0
        }, this.printTxt = function(e, n, t, s) {
            var o = `<p class="${n}" id="${t}">${e}</p>`;
            this.log(o, s)
        }, this.log = function(e, n) {
            $("#caret").off(), $("#ip").remove(), n && this.registre.html(""), this.registre.append(e), this.registre.append(this.promptHtml), $("#caret").keypress(function(e) {
                if (13 === e.keyCode) {
                    e.preventDefault();
                    var n = $("#caret").val();
                    return $("#caret").val(""), r.printTxt(n, "uoutput", null, null, !1), n
                }
            }), $("#caret").keypress(function(e) {
                if (13 === e.keyCode) switch (e.result) {
                    case "version":
                    case "v":
                        r.printTxt("Version alpha 1.0, 2017");
                        break;
                    default:
                        console.log("default")
                }
            }), $("#caret").focus(function(e) {}), console.log("here"), $("html, body").animate({
                scrollTop: $(document).height()
            }, 0)
        }, this.createUinputs = function(e, n, t, s) {
            var o = this.btn(n, t, s),
                i = this.btn_yn(t),
                a = this.lnk_yn(t);
            switch (e) {
                case "btn":
                    this.log(o, !1);
                    break;
                case "ynbtns":
                    this.log(i, !1);
                    break;
                case "ynlinks":
                    this.log(a, !1)
            }
        }, this.listChoices = function(e) {
            var n = [];
            for (let t in e) n = n.concat(e[t].matches);
            return console.log(n), n
        }, this.btnHandlerGen = function(n, t) {
            return function(s) {
                const o = e();
                var i = Object.assign({}, r.fToggleOptions);
                i.start = function() {
                    r.printTxt(s.target.value, "uoutput hidden", o, !1)
                }, i.always = function() {
                    $(`#${o}`).fadeToggle(this.fToggleOptions)
                };
                for (let e = 1; e < n.length; e++) n[e] != n[t] && $(`#${n[e]}`).fadeToggle(r.fToggleOptions);
                $(`#${n[t]}`).fadeToggle(i)
            }
        }, this.ddlistHandlerGen = function(n, t, s) {
            return function(o) {
                const i = e();
                var a = Object.assign({}, r.fToggleOptions);
                a.start = function() {
                    r.printTxt(o.target.value, "uoutput hidden", i, !1)
                }, a.always = function() {
                    $(`#${i}`).fadeToggle(this.fToggleOptions)
                };
                for (let e = 1; e < n.length; e++) n[e] != n[t] && $(`#${n[e]}`).fadeToggle(r.fToggleOptions);
                $(`#${n[t]}`).fadeToggle(a);
                for (let e = 0; e < s.handlers.length; e++) this.value === s.values[e] && s.handlers[e]()
            }
        }, this.caretHandlerGen = function(e, n, t, s) {
            return function(o) {
                const i = n[t].matches;
                if (13 === o.keyCode && i.includes(o.result)) {
                    n[t].handler();
                    for (let n = 0; n < Object.keys(e.answers).length; n++) {
                        const e = n + 1;
                        $(`#${s[e]}`).fadeToggle(this.fToggleOptions)
                    }
                }
            }
        }, this.question = function(n) {
            console.log("ui.question() start");
            const t = e(Object.keys(n.answers).length + 1),
                s = Object.values(n.answers),
                o = this.listChoices(s);
            console.dir(s), this.printTxt(n.question.txt, n.question.class, t[0], n.question.cls);
            for (let e = 0; e < Object.keys(n.answers).length; e++) {
                const n = e + 1;
                var i = this.btnHandlerGen(t, n),
                    a = this.ddlistHandlerGen(t, n, s[e]);
                switch (s[e].type) {
                    case "button":
                        this.log(this.btn(s[e].value, t[n], s[e].class)), $(`#${t[n]}`).click(i), $(`#${t[n]}`).click(s[e].handler);
                        break;
                    case "ddList":
                        this.log(this.ddList(s[e].name, t[n], s[e].class, s[e].values, s[e].options)), $(`#${t[n]}`).change(a);
                        break;
                    default:
                        this.log(this.btn(s[e].value, t[n], s[e].class)), $(`#${t[n]}`).click(i), $(`#${t[n]}`).click(s[e].handler)
                }
            }
            for (let e in s) {
                var l = r.caretHandlerGen(n, s, e, t);
                $("#caret").keypress(l)
            }
            $("#caret").keypress(function(e) {
                13 === e.keyCode && !1 === o.includes(e.result) && (r.printTxt("Cette commande n'est pas prévue par l'application."), r.question(n))
            }), console.log("ui.question() end")
        }, console.log(this), console.log("UI() constructor end"), this
    }), console.log("loop() end")
}
