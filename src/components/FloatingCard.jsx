import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


const photoSets = [
    [
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/817329473_122304146540203666_9210632606273483348_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHjvUZGMX-xaKlxVW-VBth3L9zJF_M86yYv3MkX8zzrJvlWGQ5N45lieljRaWnNpS_HkNG5w-kJxXe4ppq6GHFh&_nc_ohc=j0ky683Oi1gQ7kNvwGfBH6m&_nc_oc=AdqjhR3XB4BqgPTYo8qU2eJAxzy_qFbEh7zcxJ243WYq_3S_tMqWoApa7qEjbVtNZlc&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=ODocZ99iZa6yw6Y_R8HX8A&_nc_ss=7b2a8&oh=00_AQNBb9AL8k5wolnZfa7yL8NHD28QQMFnzHpQzIT1DaG7EQ&oe=6AD88FDA",
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/816394331_122304146624203666_4345671479326021329_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEF3RfPpjewIV0kb93l_LPdPVY7SvE6Els9VjtK8ToSW918jqKD0L9qUUJQyyCsykaHA5tq_YSV1xHxC3n26RJA&_nc_ohc=kMp4H26G4_wQ7kNvwGuBmBu&_nc_oc=AdqTTaRtvcVVptvwZqYRdzQOV1JItr9noS6mCt3qiSps6zDCtwq_qlHFoUz0Yn1UeNQ&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=EWbc3fmmVHxp-uhZ02UtKA&_nc_ss=7b2a8&oh=00_AQNzUVuwh9HBNAtbuy6xrZJeIgmgdN4JHo5QZysReys0FA&oe=6AD89B90"
    ],
    [
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/813420901_122303813192203666_8759944697999081845_n.jpg?stp=dst-jpg_tt6&cstp=mx788x788&ctp=s788x788&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2CLfys5gBI1fJ8GmRPikc_F2iboFU4Ez8XaJugVTgTK7zMYEpevF3lFcuu3h5RBhysF0rGQ_MoGAihOWK62Iq&_nc_ohc=wCBG3q2NE9wQ7kNvwHd0HTn&_nc_oc=AdoGcRPJ3oZN8iMZD6rr5Nqs72mM9EHHydrXh5o4EHiUP7duIViAF7tQKCl0JpVHpO4&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=qogYJhPQBcsa1m6PvTtz3g&_nc_ss=7b2a8&oh=00_AQMxTICa0wgb_HukSBK2myeKqhTBpw8VQZ-Ea7PtMcfcUw&oe=6AD867DA",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/813765485_122303813144203666_6537233292543376471_n.jpg?stp=dst-jpg_tt6&cstp=mx788x788&ctp=s788x788&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFqGoOdBug0f8as1ueOO-Z50chgU2-audrRyGBTb5q52mUb1p-nqdEmOHbjwwZlxchLN3Too9sn_H9xLVAMwpYv&_nc_ohc=HqDgwkioOe0Q7kNvwFmOO9k&_nc_oc=AdoT9HUa_5k9MB3QO5bXg4LMk7cu7m2d7sMr1GSZRMAwfKXV1M2CfuQfOpcm_jqr2kg&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=rBDg1D2qFR_2TsXdLDFpZg&_nc_ss=7b2a8&oh=00_AQPasb-xSPnBH7OwgvWzqrITuzz2nj_td9Zx9z9-CSR8DA&oe=6AD882A3"
    ],
    [
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/810962280_122303546228203666_7312304382546856152_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwrMGz95YaGwFqwtWFZmwV9gu5PY-wOvT2C7k9j7A69DLW3iE8B-aJyvAT9wVjTJaC7E2d6gupyAqOkaasNinV&_nc_ohc=JbKTq5MrxgcQ7kNvwHpLejx&_nc_oc=AdpjvnrC9TkiXw94OfIb1Z0M9GsoXFrXBqS5iJvgC2GFs2Xw-Sqk3PFM879whLSZUJ4&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=lssv8PP3JN_OiJZZ0m1QKg&_nc_ss=7b2a8&oh=00_AQNiY1Kwrrrz5DPIiBz5N4LpfmhvaHI9Eiss-c740xpNow&oe=6AD87371",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/812400384_122303546192203666_5920863398134669777_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGKM0nUGgPB-0FkmZ1GWR4q1NcN4VAx-YDU1w3hUDH5gLCQ02zIUkc0umCNRrwQj-44xZw1xxRq50otl9igTFTH&_nc_ohc=cXoMRB30HQkQ7kNvwFHt1Jo&_nc_oc=AdqhTzeaLNoYSS9swJrZfF_5S5uDcf1B5RICW3us5ieCI_8iGgpfQzevZYKQlhkZlLA&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=7eYMhUmdyhSAN0QBkjKldg&_nc_ss=7b2a8&oh=00_AQPHKcFvwuiw__TQIPChL4Rbc4vs9avey5k3WazASjOfoA&oe=6AD8912B"
    ],
    [
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/844997720_122309186552203666_376450531111663732_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFGSrxcb8_EI2luVQ6H1V5xEuCpPoJaQ6AS4Kk-glpDoMGDeg-AE328Em_wbMyiGE-JQaGRzLsqlruozGWjra14&_nc_ohc=qL2Pl3BTMskQ7kNvwEe5MsP&_nc_oc=AdqKIgDF9gfQHb5TPRTyiSEmsxoAbo-txp3EmoEyfxC3jVksYcUYkFhjW27lvfG0z1g&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=xS1h28LuqfBVgA4XIsuv6A&_nc_ss=7b2a8&oh=00_AQP2eFDSd0d5VSRS9LjqXTpJ0jocEToIrlIWpIMSCGio-A&oe=6AD8A8FF",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/846612110_122309186570203666_9074784802057896354_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE_N7tUhd4ygwEe3fd6VGrjzKwdX8gpyoTMrB1fyCnKhEGQ_FSXxC76kpuIdIT8S0QhemDCw6JAymHyKrcUI7tl&_nc_ohc=ThJPpttfVGUQ7kNvwHQ9JMy&_nc_oc=Ado92Ub-DLxicbHMdLrsxFpcN1AR8f4elO3tPYixuj_y6O0GfMjZvnNBNnD4tMB4RFA&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=R4xcg-eqJaMdtL6Px5f6mw&_nc_ss=7b2a8&oh=00_AQPpwcWbn8VbnAUy4je8Kx7v8vDLlcKrNfkc-S207sNlDA&oe=6AD88025"
    ],
    [
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/844148901_122308497302203666_139603282335059381_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH0ybdNrLslNB9VYJbw_St_VeuYwAM0oopV65jAAzSiis3JD-mrI1Nzi_RwnyxKsB5aMNCz4Ppw4ewoIHuP7WuX&_nc_ohc=dtzgPrEl-0IQ7kNvwEIRxlB&_nc_oc=AdrH7sxV8_GUIkUevPZYQPoa_0etKk3QlO7npH3fJyD2a7GVxy2H5TlZCPIWf0GoKbM&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=BCSu13yycmwZxIEnzvjeVw&_nc_ss=7b2a8&oh=00_AQN5AfdC_jRgfvjfp45Rwlah3LcVU3J8-9Lnqh6FVQ2iug&oe=6AD88AD3",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/844417418_122308497296203666_4602079280476261678_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFjp5RNGn8Esov39qVlwV8yHny4lRXYufMefLiVFdi58zkj6ksSJw0RDNrPqd5wxafEG2jm0n2DXXjQXF8V-bBl&_nc_ohc=b15kCcas18EQ7kNvwFRkREh&_nc_oc=AdrM3TTQzgo9noob5cqt3FNfzlq1c9pC9BnJGSKAGt_tMe0Dq9qYr1V3nSBVIQCgoUI&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=kK4jXy8fVkT6zpTuf682Xw&_nc_ss=7b2a8&oh=00_AQPvOSyllGHaZelfp24olV4a1iZWzc6OzkxNPjPzKwYs2g&oe=6AD8A6B7"
    ],
    [
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/842367077_122308121726203666_7955385598212543569_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHLhXxcG3Ml6mg5hr5o9ltHDkb-sdQu0n8ORv6x1C7Sf7FJdjN3savckvTNMm7EU34UTgh86tPxETLePMf0D5Td&_nc_ohc=37HAl36pGtQQ7kNvwHsIdgX&_nc_oc=AdqYxD0GOD6lg88jGBj9_hnjPMlWrvs-A9YZQU5CApwCNt1Evv4Sd_rl0YG5yg_vvww&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=d9qMvJXX43y4GhN35zeb9g&_nc_ss=7b2a8&oh=00_AQNwvhB93i8hHI_0piMJa2tp5D9ka2qc04nkbR8nVqgGRQ&oe=6AD897F0",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/845748396_122308121684203666_1891915524114174985_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE4gbEEDRu-LN24fBkHUlC9H4RcikF5l_ofhFyKQXmX-iMhaCfsPl70rzxZdKqcX-EfO0c-uEdAPZ_4l1VTOKpV&_nc_ohc=NpQwCfstz7wQ7kNvwFlDbOC&_nc_oc=AdqY7kuhUdhD8xLlGI8zZXiL903Si0HF1Xur5s-16HRcSE5UyK7RQ5Lf4hHwy6p4Toc&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=AVTq13JqRZC6jcgTa1AhsQ&_nc_ss=7b2a8&oh=00_AQMkoW_-vSlgLHN8VZ-vE8szQULoHhiRe_z6C8nlnzKrsA&oe=6AD8885D"
    ],
    [
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/831400460_122307710738203666_7867811086488022982_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH4k27xtqcct71-Y0Eqln7gzwIcv2-iFpfPAhy_b6IWl6z_K2mSI47wifHZHVl6QAdNKrtb6ctqBMs0LOrpb_1N&_nc_ohc=e4sM83z_dIUQ7kNvwEbeKrP&_nc_oc=AdofqFMp2sFRnGkH3OaixoKL6qgLRBUmmlupM6hkN5m2GKT4i_EWd6aQ29mV-_XhgNc&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=SU3saP64GAVhlMP6ppMKvQ&_nc_ss=7b2a8&oh=00_AQNuIehAgR7LEJX6HFzTVNSIVr3E4wyLqVDs8LtdntzMCA&oe=6AD89FAF",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/839934830_122307710768203666_7961212113878518833_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFH_zVQZT0CEywFgp_drtkFO8vMZ02ijuE7y8xnTaKO4QIhcCnwnrPvaBqqXBIb8AkkrtqjccaLCtLPPUTeom5T&_nc_ohc=L7q1042c8uwQ7kNvwHakUj0&_nc_oc=Adp4WDg7y1_mTzxiCv72ECt9ijLy8AfvsWgipRSpZHwdQoVj7TRseeZGtJgdI2ByAQk&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=iKZ_R3Zgu_74Ef5vm1ZKdw&_nc_ss=7b2a8&oh=00_AQPX2YGYfjOz9bjpZOCPgRkrHE23xIHZ2Y20TMN4jVi-ng&oe=6AD89653"
    ],
    [
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/825351566_122307503192203666_3746714860444243769_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHubv2qAs2wx7TBvFWEEGsP5f3noyAzW3Tl_eejIDNbdB4n0XTGK3VSygmoXDULw99pv9NOWKHT9iVCx_LpIECv&_nc_ohc=V3fyHfXH2lQQ7kNvwFxe4iy&_nc_oc=AdoBYSCy2sqskTKsXyCck2oonoRpzTAxNmlO929UQ5dUpoo67KK8GajFk5nhFcbSnog&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=y94vbfaaGzuY1axBpN1cmg&_nc_ss=7b2a8&oh=00_AQMZGumR1FpmCULG4W5O4gkgMTm9xYrVZ88HgxZS4zIB7Q&oe=6AD88B99",
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/825351697_122307503198203666_4276609155053315871_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFBFXfglUci39P2I1sb-XxmJFMml0F0k_AkUyaXQXST8CAMXKsXb1yWftJj-o5XI3j8Q4DKhW5WP_IrFhqfuVFM&_nc_ohc=lHegAThYM_gQ7kNvwHmv2aB&_nc_oc=AdpEFqPyqMRWuDHPizmDdPrna95csbrnAyo6df0uINpJrPFZ9GnuUNpHZCZ66eTQ1yA&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=MrfgcVcAlttB0yKRjg-1Lg&_nc_ss=7b2a8&oh=00_AQMoY5V5OqQymp7O_HzTQDQm23n4NVFVGCnStFLopt3g8g&oe=6AD89EFB"
    ],
    [
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/810962280_122303546228203666_7312304382546856152_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwrMGz95YaGwFqwtWFZmwV9gu5PY-wOvT2C7k9j7A69DLW3iE8B-aJyvAT9wVjTJaC7E2d6gupyAqOkaasNinV&_nc_ohc=JbKTq5MrxgcQ7kNvwHpLejx&_nc_oc=AdpjvnrC9TkiXw94OfIb1Z0M9GsoXFrXBqS5iJvgC2GFs2Xw-Sqk3PFM879whLSZUJ4&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=lssv8PP3JN_OiJZZ0m1QKg&_nc_ss=7b2a8&oh=00_AQNiY1Kwrrrz5DPIiBz5N4LpfmhvaHI9Eiss-c740xpNow&oe=6AD87371",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/812400384_122303546192203666_5920863398134669777_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGKM0nUGgPB-0FkmZ1GWR4q1NcN4VAx-YDU1w3hUDH5gLCQ02zIUkc0umCNRrwQj-44xZw1xxRq50otl9igTFTH&_nc_ohc=cXoMRB30HQkQ7kNvwFHt1Jo&_nc_oc=AdqhTzeaLNoYSS9swJrZfF_5S5uDcf1B5RICW3us5ieCI_8iGgpfQzevZYKQlhkZlLA&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=7eYMhUmdyhSAN0QBkjKldg&_nc_ss=7b2a8&oh=00_AQPHKcFvwuiw__TQIPChL4Rbc4vs9avey5k3WazASjOfoA&oe=6AD8912B"
    ],
    [
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/810962280_122303546228203666_7312304382546856152_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwrMGz95YaGwFqwtWFZmwV9gu5PY-wOvT2C7k9j7A69DLW3iE8B-aJyvAT9wVjTJaC7E2d6gupyAqOkaasNinV&_nc_ohc=JbKTq5MrxgcQ7kNvwHpLejx&_nc_oc=AdpjvnrC9TkiXw94OfIb1Z0M9GsoXFrXBqS5iJvgC2GFs2Xw-Sqk3PFM879whLSZUJ4&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=lssv8PP3JN_OiJZZ0m1QKg&_nc_ss=7b2a8&oh=00_AQNiY1Kwrrrz5DPIiBz5N4LpfmhvaHI9Eiss-c740xpNow&oe=6AD87371",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/812400384_122303546192203666_5920863398134669777_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGKM0nUGgPB-0FkmZ1GWR4q1NcN4VAx-YDU1w3hUDH5gLCQ02zIUkc0umCNRrwQj-44xZw1xxRq50otl9igTFTH&_nc_ohc=cXoMRB30HQkQ7kNvwFHt1Jo&_nc_oc=AdqhTzeaLNoYSS9swJrZfF_5S5uDcf1B5RICW3us5ieCI_8iGgpfQzevZYKQlhkZlLA&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=7eYMhUmdyhSAN0QBkjKldg&_nc_ss=7b2a8&oh=00_AQPHKcFvwuiw__TQIPChL4Rbc4vs9avey5k3WazASjOfoA&oe=6AD8912B"
    ],
    [
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/810962280_122303546228203666_7312304382546856152_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwrMGz95YaGwFqwtWFZmwV9gu5PY-wOvT2C7k9j7A69DLW3iE8B-aJyvAT9wVjTJaC7E2d6gupyAqOkaasNinV&_nc_ohc=JbKTq5MrxgcQ7kNvwHpLejx&_nc_oc=AdpjvnrC9TkiXw94OfIb1Z0M9GsoXFrXBqS5iJvgC2GFs2Xw-Sqk3PFM879whLSZUJ4&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=lssv8PP3JN_OiJZZ0m1QKg&_nc_ss=7b2a8&oh=00_AQNiY1Kwrrrz5DPIiBz5N4LpfmhvaHI9Eiss-c740xpNow&oe=6AD87371",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/812400384_122303546192203666_5920863398134669777_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGKM0nUGgPB-0FkmZ1GWR4q1NcN4VAx-YDU1w3hUDH5gLCQ02zIUkc0umCNRrwQj-44xZw1xxRq50otl9igTFTH&_nc_ohc=cXoMRB30HQkQ7kNvwFHt1Jo&_nc_oc=AdqhTzeaLNoYSS9swJrZfF_5S5uDcf1B5RICW3us5ieCI_8iGgpfQzevZYKQlhkZlLA&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=7eYMhUmdyhSAN0QBkjKldg&_nc_ss=7b2a8&oh=00_AQPHKcFvwuiw__TQIPChL4Rbc4vs9avey5k3WazASjOfoA&oe=6AD8912B"
    ],
    [
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/810962280_122303546228203666_7312304382546856152_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwrMGz95YaGwFqwtWFZmwV9gu5PY-wOvT2C7k9j7A69DLW3iE8B-aJyvAT9wVjTJaC7E2d6gupyAqOkaasNinV&_nc_ohc=JbKTq5MrxgcQ7kNvwHpLejx&_nc_oc=AdpjvnrC9TkiXw94OfIb1Z0M9GsoXFrXBqS5iJvgC2GFs2Xw-Sqk3PFM879whLSZUJ4&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=lssv8PP3JN_OiJZZ0m1QKg&_nc_ss=7b2a8&oh=00_AQNiY1Kwrrrz5DPIiBz5N4LpfmhvaHI9Eiss-c740xpNow&oe=6AD87371",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/812400384_122303546192203666_5920863398134669777_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGKM0nUGgPB-0FkmZ1GWR4q1NcN4VAx-YDU1w3hUDH5gLCQ02zIUkc0umCNRrwQj-44xZw1xxRq50otl9igTFTH&_nc_ohc=cXoMRB30HQkQ7kNvwFHt1Jo&_nc_oc=AdqhTzeaLNoYSS9swJrZfF_5S5uDcf1B5RICW3us5ieCI_8iGgpfQzevZYKQlhkZlLA&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=7eYMhUmdyhSAN0QBkjKldg&_nc_ss=7b2a8&oh=00_AQPHKcFvwuiw__TQIPChL4Rbc4vs9avey5k3WazASjOfoA&oe=6AD8912B"
    ],
    [
        "https://scontent.fcoo2-1.fna.fbcdn.net/v/t39.30808-6/810962280_122303546228203666_7312304382546856152_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwrMGz95YaGwFqwtWFZmwV9gu5PY-wOvT2C7k9j7A69DLW3iE8B-aJyvAT9wVjTJaC7E2d6gupyAqOkaasNinV&_nc_ohc=JbKTq5MrxgcQ7kNvwHpLejx&_nc_oc=AdpjvnrC9TkiXw94OfIb1Z0M9GsoXFrXBqS5iJvgC2GFs2Xw-Sqk3PFM879whLSZUJ4&_nc_zt=23&_nc_ht=scontent.fcoo2-1.fna&_nc_gid=lssv8PP3JN_OiJZZ0m1QKg&_nc_ss=7b2a8&oh=00_AQNiY1Kwrrrz5DPIiBz5N4LpfmhvaHI9Eiss-c740xpNow&oe=6AD87371",
        "https://scontent.fcoo2-2.fna.fbcdn.net/v/t39.30808-6/812400384_122303546192203666_5920863398134669777_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGKM0nUGgPB-0FkmZ1GWR4q1NcN4VAx-YDU1w3hUDH5gLCQ02zIUkc0umCNRrwQj-44xZw1xxRq50otl9igTFTH&_nc_ohc=cXoMRB30HQkQ7kNvwFHt1Jo&_nc_oc=AdqhTzeaLNoYSS9swJrZfF_5S5uDcf1B5RICW3us5ieCI_8iGgpfQzevZYKQlhkZlLA&_nc_zt=23&_nc_ht=scontent.fcoo2-2.fna&_nc_gid=7eYMhUmdyhSAN0QBkjKldg&_nc_ss=7b2a8&oh=00_AQPHKcFvwuiw__TQIPChL4Rbc4vs9avey5k3WazASjOfoA&oe=6AD8912B"
    ],

];


const FloatingCard = () => {
    const { t, } = useTranslation();
    const [visible, setVisible] = useState(true);
    const [lastDismissed, setLastDismissed] = useState(null);
    const [photos, setPhotos] = useState([]);



    // Pick photo set once on mount, then refresh at midnight
    useEffect(() => {
        const updatePhotos = () => {
            const now = Date.now();
            const dayIndex =
                Math.floor(now / (1000 * 60 * 60 * 24)) % photoSets.length;
            setPhotos(photoSets[dayIndex]);
        };

        updatePhotos(); // run once on mount

        // Calculate ms until midnight
        const now = new Date();
        const msUntilMidnight =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate() + 1,
                0,
                0,
                0
            ).getTime() - now.getTime();

        // Refresh at midnight, then every 24h
        const midnightTimer = setTimeout(() => {
            updatePhotos();
            setInterval(updatePhotos, 24 * 60 * 60 * 1000);
        }, msUntilMidnight);

        return () => clearTimeout(midnightTimer);
    }, []);

    const dismissCard = () => {
        setVisible(false);
        setLastDismissed(Date.now());
    };

    // Reappear after 10 minutes if dismissed
    useEffect(() => {
        if (!visible && lastDismissed) {
            const timer = setTimeout(() => {
                setVisible(true);
            }, 10 * 60 * 1000);
            return () => clearTimeout(timer);
        }
    }, [visible, lastDismissed]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 
                w-72 sm:w-96 md:w-md lg:w-md z-30">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg text-red-600 font-semibold">{t("Dhomologeo")}</h2>
                <button
                    onClick={dismissCard}
                    className="text-black hover:text-gray-700"
                >
                    ✕
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {photos.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Photo ${idx + 1}`}
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded"
                    />
                ))}
            </div>
        </div>

    );
};

export default FloatingCard;
