(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"paddingLeft":0,"scrollBarWidth":10,"scrollBarMargin":2,"backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"contentOpaque":false,"backgroundOpacity":1,"paddingRight":0,"desktopMipmappingEnabled":false,"class":"Player","mouseWheelEnabled":true,"definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_019E820D_0BD2_0221_4192_3E02F97820B8_camera","initialSequence":"this.sequence_01B2836C_0BD2_02E7_416C_6F724D22EFAA"},{"data":{"name":"Container580"},"paddingLeft":0,"scrollBarWidth":10,"scrollBarMargin":2,"backgroundOpacity":0,"contentOpaque":false,"paddingRight":0,"class":"Container","propagateClick":false,"scrollBarOpacity":0.5,"layout":"horizontal","toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","scrollBarColor":"#000000","paddingTop":0,"overflow":"visible","gap":10,"minHeight":0,"id":"Container_05292A11_0BD2_0221_4172_0B4F940A52E8","paddingBottom":0,"minWidth":0,"shadow":false,"borderSize":0,"children":["this.ThumbnailList_052CFA14_0BD2_0227_4172_537160F354CB"],"left":0,"verticalAlign":"bottom","horizontalAlign":"center","bottom":0,"right":0,"height":200,"borderRadius":0},{"id":"ThumbnailList_052CFA14_0BD2_0227_4172_537160F354CB_playlist","items":[{"media":"this.panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_camera","class":"PanoramaPlayListItem"},{"media":"this.panorama_019DF25C_0BD2_0227_4193_A520CDB805B7","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_camera","class":"PanoramaPlayListItem"},{"media":"this.panorama_019E820D_0BD2_0221_4192_3E02F97820B8","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_019E820D_0BD2_0221_4192_3E02F97820B8_camera","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"id":"mainPlayList","items":[{"media":"this.panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4","camera":"this.panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_019DF25C_0BD2_0227_4193_A520CDB805B7","camera":"this.panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_019E820D_0BD2_0221_4192_3E02F97820B8","camera":"this.panorama_019E820D_0BD2_0221_4192_3E02F97820B8_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList"},{"overlays":["this.overlay_06C0EEC1_0BD2_0221_4196_147B40534789","this.overlay_066FFE37_0BD2_0261_4193_2C2AC6B577D9"],"partial":false,"hfovMin":"120%","thumbnailUrl":"media/panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_t.jpg","adjacentPanoramas":[{"backwardYaw":-107.42,"yaw":44.04,"class":"AdjacentPanorama","data":{"overlayID":"overlay_06C0EEC1_0BD2_0221_4196_147B40534789"},"distance":2,"panorama":"this.panorama_019DF25C_0BD2_0227_4193_A520CDB805B7","select":"this.overlay_06C0EEC1_0BD2_0221_4196_147B40534789.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":-7.09,"yaw":-37.24,"class":"AdjacentPanorama","data":{"overlayID":"overlay_066FFE37_0BD2_0261_4193_2C2AC6B577D9"},"distance":4.5,"panorama":"this.panorama_019E820D_0BD2_0221_4192_3E02F97820B8","select":"this.overlay_066FFE37_0BD2_0261_4193_2C2AC6B577D9.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4","pitch":0,"class":"Panorama","label":trans('panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":18432,"colCount":36,"class":"TiledImageResourceLevel","height":3072,"tags":"ondemand","rowCount":6,"url":"media/panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_0/{face}/0/{row}_{column}.jpg"},{"width":9216,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","rowCount":3,"url":"media/panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2,"url":"media/panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_0/{face}/2/{row}_{column}.jpg"},{"width":3072,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_0/{face}/3/{row}_{column}.jpg"},{"width":12288,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1,"url":"media/panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_0/{face}/vr2gen/0.jpg"}]},"thumbnailUrl":"media/panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_t.jpg"}],"vfov":180,"hfov":360,"data":{"label":"\u1ea2nh To\u00e0n C\u1ea3nh"},"hfovMax":130},{"progressBarBackgroundColorDirection":"vertical","progressBorderRadius":0,"data":{"name":"Main Viewer"},"paddingLeft":0,"playbackBarProgressOpacity":1,"subtitlesTop":0,"playbackBarBottom":5,"progressLeft":0,"toolTipOpacity":1,"paddingRight":0,"transitionDuration":500,"height":"100%","subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","toolTipDisplayTime":600,"progressBackgroundColorDirection":"vertical","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"class":"ViewerArea","playbackBarProgressBackgroundColorDirection":"vertical","propagateClick":false,"toolTipFontWeight":"normal","toolTipTextShadowColor":"#000000","subtitlesFontWeight":"normal","toolTipBorderSize":1,"subtitlesPaddingTop":5,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipHorizontalAlign":"center","subtitlesShadow":false,"progressBackgroundOpacity":1,"playbackBarHeight":10,"toolTipPaddingRight":6,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipPaddingTop":4,"toolTipShadowSpread":0,"minHeight":50,"paddingTop":0,"paddingBottom":0,"minWidth":100,"playbackBarBorderSize":0,"toolTipShadowOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesOpacity":1,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarRight":0,"progressBackgroundColor":["#FFFFFF"],"displayTooltipInSurfaceSelection":true,"playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"subtitlesGap":0,"playbackBarHeadShadowBlurRadius":3,"progressBottom":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"borderRadius":0,"playbackBarLeft":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadHeight":15,"toolTipShadowColor":"#333138","toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowOpacity":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"progressBorderSize":0,"subtitlesFontSize":"3vmin","toolTipFontSize":"1.11vmin","subtitlesPaddingBottom":5,"subtitlesPaddingLeft":5,"subtitlesVerticalAlign":"bottom","transitionMode":"blending","toolTipFontStyle":"normal","progressHeight":10,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesHorizontalAlign":"center","subtitlesPaddingRight":5,"subtitlesBorderSize":0,"subtitlesBottom":50,"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","subtitlesEnabled":true,"doubleClickAction":"toggle_fullscreen","toolTipShadowBlurRadius":3,"displayTooltipInTouchScreens":true,"subtitlesBorderColor":"#FFFFFF","translationTransitionDuration":1000,"progressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarHeadShadow":true,"subtitlesTextDecoration":"none","playbackBarHeadBorderSize":0,"progressRight":0,"playbackBarHeadOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowBlurRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"id":"MainViewer","width":"100%","shadow":false,"toolTipFontFamily":"Arial","surfaceReticleOpacity":0.6,"toolTipBorderRadius":3,"toolTipPaddingLeft":6,"borderSize":0,"playbackBarOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowVerticalLength":0,"progressOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesFontFamily":"Arial","vrPointerSelectionTime":2000,"toolTipShadowVerticalLength":0,"surfaceReticleSelectionOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderRadius":0,"firstTransitionDuration":0,"vrPointerColor":"#FFFFFF"},{"overlays":["this.overlay_06F3CEC9_0BD2_0221_41A3_E2A61A869399"],"partial":false,"hfovMin":"120%","thumbnailUrl":"media/panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_t.jpg","adjacentPanoramas":[{"backwardYaw":44.04,"yaw":-107.42,"class":"AdjacentPanorama","data":{"overlayID":"overlay_06F3CEC9_0BD2_0221_41A3_E2A61A869399"},"distance":100,"panorama":"this.panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4","select":"this.overlay_06F3CEC9_0BD2_0221_41A3_E2A61A869399.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_019DF25C_0BD2_0227_4193_A520CDB805B7","pitch":0,"class":"Panorama","label":trans('panorama_019DF25C_0BD2_0227_4193_A520CDB805B7.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":18432,"colCount":36,"class":"TiledImageResourceLevel","height":3072,"tags":"ondemand","rowCount":6,"url":"media/panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_0/{face}/0/{row}_{column}.jpg"},{"width":9216,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","rowCount":3,"url":"media/panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2,"url":"media/panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_0/{face}/2/{row}_{column}.jpg"},{"width":3072,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_0/{face}/3/{row}_{column}.jpg"},{"width":12288,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1,"url":"media/panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_0/{face}/vr2gen/0.jpg"}]},"thumbnailUrl":"media/panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_t.jpg"}],"vfov":180,"hfov":360,"data":{"label":"M\u1eb7t to\u00e0 105 L\u00e1ng H\u1ea1"},"hfovMax":130},{"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","aaEnabled":true,"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","zoomEnabled":true},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4_camera","initialSequence":"this.sequence_01B76368_0BD2_02EF_41A0_63ECA316B522"},{"overlays":["this.overlay_06606E38_0BD2_026F_4197_A56C2C7F10C1"],"partial":false,"hfovMin":"120%","thumbnailUrl":"media/panorama_019E820D_0BD2_0221_4192_3E02F97820B8_t.jpg","adjacentPanoramas":[{"backwardYaw":-37.24,"yaw":-7.09,"class":"AdjacentPanorama","data":{"overlayID":"overlay_06606E38_0BD2_026F_4197_A56C2C7F10C1"},"distance":100,"panorama":"this.panorama_0113A29D_0BD2_0221_41A2_74FF96E1AFE4","select":"this.overlay_06606E38_0BD2_026F_4197_A56C2C7F10C1.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_019E820D_0BD2_0221_4192_3E02F97820B8","pitch":0,"class":"Panorama","label":trans('panorama_019E820D_0BD2_0221_4192_3E02F97820B8.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":18432,"colCount":36,"class":"TiledImageResourceLevel","height":3072,"tags":"ondemand","rowCount":6,"url":"media/panorama_019E820D_0BD2_0221_4192_3E02F97820B8_0/{face}/0/{row}_{column}.jpg"},{"width":9216,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","rowCount":3,"url":"media/panorama_019E820D_0BD2_0221_4192_3E02F97820B8_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2,"url":"media/panorama_019E820D_0BD2_0221_4192_3E02F97820B8_0/{face}/2/{row}_{column}.jpg"},{"width":3072,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_019E820D_0BD2_0221_4192_3E02F97820B8_0/{face}/3/{row}_{column}.jpg"},{"width":12288,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1,"url":"media/panorama_019E820D_0BD2_0221_4192_3E02F97820B8_0/{face}/vr2gen/0.jpg"}]},"thumbnailUrl":"media/panorama_019E820D_0BD2_0221_4192_3E02F97820B8_t.jpg"}],"vfov":180,"hfov":360,"data":{"label":"M\u1eb7t to\u00e0 nh\u00e0 97-99 L\u00e1ng H\u1ea1"},"hfovMax":130},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_019DF25C_0BD2_0227_4193_A520CDB805B7_camera","initialSequence":"this.sequence_01B2F36B_0BD2_02E1_4173_2261631411BC"},{"itemPaddingBottom":3,"paddingLeft":20,"scrollBarWidth":10,"scrollBarOpacity":0.5,"scrollBarMargin":2,"backgroundColorRatios":[0],"itemBackgroundColorRatios":[],"itemLabelGap":5,"backgroundOpacity":0.2,"paddingRight":20,"itemHorizontalAlign":"center","itemThumbnailShadowColor":"#000000","itemLabelFontStyle":"normal","itemThumbnailShadowOpacity":0.8,"itemLabelFontColor":"#FFFFFF","class":"ThumbnailList","itemOpacity":1,"itemThumbnailShadowBlurRadius":4,"propagateClick":false,"itemThumbnailShadowHorizontalLength":3,"itemLabelHorizontalAlign":"center","itemLabelPosition":"bottom","itemLabelTextDecoration":"none","itemPaddingRight":3,"itemPaddingLeft":3,"layout":"horizontal","itemLabelFontFamily":"Arial","toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","itemThumbnailHeight":75,"maxHeight":600,"playList":"this.ThumbnailList_052CFA14_0BD2_0227_4172_537160F354CB_playlist","itemThumbnailOpacity":1,"backgroundColor":["#000000"],"itemPaddingTop":3,"scrollBarColor":"#FFFFFF","maxWidth":800,"paddingTop":10,"backgroundColorDirection":"vertical","itemThumbnailWidth":100,"gap":10,"itemThumbnailScaleMode":"fit_outside","id":"ThumbnailList_052CFA14_0BD2_0227_4172_537160F354CB","paddingBottom":10,"minWidth":0,"shadow":false,"itemVerticalAlign":"middle","minHeight":0,"itemThumbnailBorderRadius":5,"borderSize":0,"itemLabelFontSize":14,"itemBackgroundOpacity":0,"itemLabelFontWeight":"normal","itemBackgroundColor":[],"verticalAlign":"top","itemThumbnailShadowSpread":1,"itemThumbnailShadowVerticalLength":3,"horizontalAlign":"left","selectedItemLabelFontWeight":"bold","data":{"name":"ThumbnailList581"},"itemMode":"normal","itemThumbnailShadow":true,"itemBorderRadius":0,"itemBackgroundColorDirection":"vertical","borderRadius":5},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_01B2836C_0BD2_02E7_416C_6F724D22EFAA","restartMovementOnUserInteraction":false},{"areas":["this.HotspotPanoramaOverlayArea_06ACEEE3_0BD2_03E1_41A5_83A2C1EB776A"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToM\u1eb7tTo\u00e0105L\u00e1ngH\u1ea1","hasPanoramaAction":true},"useHandCursor":true,"id":"overlay_06C0EEC1_0BD2_0221_4196_147B40534789","items":[{"distance":50,"yaw":44.04,"class":"HotspotPanoramaOverlayImage","vfov":50.34,"verticalAlign":"middle","horizontalAlign":"center","image":"this.res_04AC2D7B_0BD2_06E1_41A2_A6F17613233D","hfov":45.76,"scaleMode":"fit_inside","pitch":-40.35,"data":{"label":"GoToM\u1eb7tTo\u00e0105L\u00e1ngH\u1ea1"}}],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_05DAEE56_0BD2_0223_41A7_68A23E627D6E"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoToM\u1eb7tTo\u00e0Nh\u00e097-99L\u00e1ngH\u1ea1","hasPanoramaAction":true},"useHandCursor":true,"id":"overlay_066FFE37_0BD2_0261_4193_2C2AC6B577D9","items":[{"distance":50,"yaw":-37.24,"class":"HotspotPanoramaOverlayImage","vfov":46.11,"verticalAlign":"middle","horizontalAlign":"center","image":"this.res_04A3BD7D_0BD2_06E1_41A3_20554DB317F1","hfov":63.47,"scaleMode":"fit_inside","pitch":-20.68,"data":{"label":"GoToM\u1eb7tTo\u00e0Nh\u00e097-99L\u00e1ngH\u1ea1"}}],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_04CB8A2E_0BD2_0263_418F_81ADB29DB46D"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoTo\u1ea2nhTo\u00e0nC\u1ea3nh"},"useHandCursor":true,"id":"overlay_06F3CEC9_0BD2_0221_41A3_E2A61A869399","items":[{"distance":50,"yaw":-107.42,"class":"HotspotPanoramaOverlayImage","vfov":8.34,"verticalAlign":"middle","horizontalAlign":"center","image":"this.res_04AC2D7B_0BD2_06E1_41A2_A6F17613233D","hfov":10.5,"scaleMode":"fit_inside","pitch":21.15,"data":{"label":"GoTo\u1ea2nhTo\u00e0nC\u1ea3nh"}}],"enabledInCardboard":true},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_01B76368_0BD2_02EF_41A0_63ECA316B522","restartMovementOnUserInteraction":false},{"areas":["this.HotspotPanoramaOverlayArea_04CA7A2E_0BD2_0263_4190_495CE8217611"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"GoTo\u1ea2nhTo\u00e0nC\u1ea3nh"},"useHandCursor":true,"id":"overlay_06606E38_0BD2_026F_4197_A56C2C7F10C1","items":[{"distance":50,"yaw":-7.09,"class":"HotspotPanoramaOverlayImage","vfov":8.34,"verticalAlign":"middle","horizontalAlign":"center","image":"this.res_04A3BD7D_0BD2_06E1_41A3_20554DB317F1","hfov":10.5,"scaleMode":"fit_inside","pitch":42.46,"data":{"label":"GoTo\u1ea2nhTo\u00e0nC\u1ea3nh"}}],"enabledInCardboard":true},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_01B2F36B_0BD2_02E1_4173_2261631411BC","restartMovementOnUserInteraction":false},{"id":"HotspotPanoramaOverlayArea_06ACEEE3_0BD2_03E1_41A5_83A2C1EB776A","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea"},{"id":"res_04AC2D7B_0BD2_06E1_41A2_A6F17613233D","class":"ImageResource","levels":[{"url":"media/res_04AC2D7B_0BD2_06E1_41A2_A6F17613233D_0.png","class":"ImageResourceLevel","height":1236,"width":1551}]},{"id":"HotspotPanoramaOverlayArea_05DAEE56_0BD2_0223_41A7_68A23E627D6E","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea"},{"id":"res_04A3BD7D_0BD2_06E1_41A3_20554DB317F1","class":"ImageResource","levels":[{"url":"media/res_04A3BD7D_0BD2_06E1_41A3_20554DB317F1_0.png","class":"ImageResourceLevel","height":1564,"width":1964}]},{"id":"HotspotPanoramaOverlayArea_04CB8A2E_0BD2_0263_418F_81ADB29DB46D","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_04CA7A2E_0BD2_0263_4190_495CE8217611","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea"}],"propagateClick":false,"mediaActivationMode":"window","scrollBarOpacity":0.5,"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer","this.Container_05292A11_0BD2_0221_4172_0B4F940A52E8"],"backgroundPreloadEnabled":true,"toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","width":"100%","backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","layout":"absolute","paddingTop":0,"backgroundColorDirection":"vertical","overflow":"hidden","gap":10,"minHeight":0,"id":"rootPlayer","paddingBottom":0,"minWidth":0,"shadow":false,"borderSize":0,"defaultVRPointer":"laser","downloadEnabled":false,"verticalAlign":"top","vrPolyfillScale":0.75,"scripts":{"textToSpeech":TDV.Tour.Script.textToSpeech,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"resumePlayers":TDV.Tour.Script.resumePlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getKey":TDV.Tour.Script.getKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openLink":TDV.Tour.Script.openLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"executeJS":TDV.Tour.Script.executeJS,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"init":TDV.Tour.Script.init,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"cloneCamera":TDV.Tour.Script.cloneCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"shareSocial":TDV.Tour.Script.shareSocial,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupImage":TDV.Tour.Script.showPopupImage,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizStart":TDV.Tour.Script.quizStart,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"mixObject":TDV.Tour.Script.mixObject,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setValue":TDV.Tour.Script.setValue,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"historyGoBack":TDV.Tour.Script.historyGoBack,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPixels":TDV.Tour.Script.getPixels,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isPanorama":TDV.Tour.Script.isPanorama,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizFinish":TDV.Tour.Script.quizFinish,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setLocale":TDV.Tour.Script.setLocale,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone},"horizontalAlign":"left","data":{"name":"Player578","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"rate":1},"defaultLocale":"en"},"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_052CFA14_0BD2_0227_4172_537160F354CB_playlist])","height":"100%","borderRadius":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.23.js.map
})();
//Generated with v2022.1.23, Mon Sep 5 2022