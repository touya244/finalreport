/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
//23FI059 高橋東弥


class ThreeJSContainer {
    scene;
    light;
    constructor() {
    }
    // 画面部分の作成(表示する枠ごとに)*
    createRendererDOM = (width, height, cameraPos) => {
        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x495ed));
        renderer.shadowMap.enabled = true; //シャドウマップを有効にする
        //カメラの設定
        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0));
        const orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        const render = (time) => {
            orbitControls.update();
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
        const cargroup = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        const treegroup = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        const boxgeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(8, 1, 4);
        const boxmaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshNormalMaterial();
        const boxmesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(boxgeometry, boxmaterial);
        cargroup.add(boxmesh);
        const wheelgeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(1);
        const wheelmaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshNormalMaterial();
        const wheelpositions = [
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-2, 0, 2.5),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-2, 0, -2.5),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(2, 0, 2.5),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(2, 0, -2.5),
        ];
        for (let i = 0; i < wheelpositions.length; i++) {
            const wheelmesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(wheelgeometry, wheelmaterial);
            const wposition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(wheelpositions[i].x, wheelpositions[i].y, wheelpositions[i].z);
            wheelmesh.position.copy(wposition);
            cargroup.add(wheelmesh);
        }
        this.scene.add(cargroup);
        const rpgeometry = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(50, 100);
        const rpmaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x228B22 });
        const rpmesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(rpgeometry, rpmaterial);
        rpmesh.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide;
        rpmesh.rotateX(-Math.PI / 2);
        rpmesh.position.x = 30;
        this.scene.add(rpmesh);
        const lpgeometry = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(50, 100);
        const lpmaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x228B22 });
        const lpmesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lpgeometry, lpmaterial);
        lpmesh.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide;
        lpmesh.rotateX(-Math.PI / 2);
        lpmesh.position.x = -30;
        this.scene.add(lpmesh);
        const lrgeometry1 = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(30, 0.1, 10);
        const lrmaterial1 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x808080 });
        const lrmesh1 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lrgeometry1, lrmaterial1);
        lrmesh1.position.set(-40, 0.05, 45);
        this.scene.add(lrmesh1);
        const lrgeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(50, 0.1, 10);
        const lrmaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x808080 });
        const lrmesh2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lrgeometry2, lrmaterial2);
        lrmesh2.position.set(-30, 0.05, 25);
        lrmesh2.rotation.y = Math.PI / 2;
        this.scene.add(lrmesh2);
        const lrgeometry3 = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(30, 0.1, 10);
        const lrmaterial3 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x808080 });
        const lrmesh3 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lrgeometry3, lrmaterial3);
        lrmesh3.position.set(-20, 0.05, 0);
        lrmesh3.rotation.y = -Math.PI;
        this.scene.add(lrmesh3);
        const rrgeometry1 = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(30, 0.1, 10);
        const rrmaterial1 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x808080 });
        const rrmesh1 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(rrgeometry1, rrmaterial1);
        rrmesh1.position.set(20, 0.05, 0);
        this.scene.add(rrmesh1);
        const rrgeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(50, 0.1, 10);
        const rrmaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x808080 });
        const rrmesh2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(rrgeometry2, rrmaterial2);
        rrmesh2.position.set(30, 0.05, -20);
        rrmesh2.rotation.y = -Math.PI / 2;
        this.scene.add(rrmesh2);
        const rrgeometry3 = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(30, 0.1, 10);
        const rrmaterial3 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x808080 });
        const rrmesh3 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(rrgeometry3, rrmaterial3);
        rrmesh3.position.set(40, 0.05, -45);
        this.scene.add(rrmesh3);
        const treegeometry1 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(5, 5, 30);
        const treematerial1 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x8B4513 });
        const treemesh1 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(treegeometry1, treematerial1);
        treemesh1.position.y = 15;
        treegroup.add(treemesh1);
        const treegeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(15, 16, 16);
        const treematerial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x228B22 });
        const treemesh2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(treegeometry2, treematerial2);
        treemesh2.position.y = 32;
        treegroup.add(treemesh2);
        treegroup.position.set(30, 0, -20);
        this.scene.add(treegroup);
        const tgeometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(10, 10, 20, 32, 1, true, 0, Math.PI);
        const tmaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x444444, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide });
        const tmesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(tgeometry, tmaterial);
        tmesh.rotation.z = Math.PI / 2;
        tmesh.rotation.y = Math.PI / 2;
        tmesh.position.set(-30, 0, 25);
        this.scene.add(tmesh);
        const points = [
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-50, 1, 45),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-30, 1, 40),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-30, 1, 5),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 5, 0),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(25, 1, 0),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(20, 1, -30),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(30, 1, -40),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(50, 1, -45),
        ];
        const vectors = [
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(40, 0, -5),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(20, 0, -25),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(10, 0, -20),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 10, 0),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(10, 0, -20),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(20, 0, -20),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(10, 0, -25),
            new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(40, 0, -5)
        ];
        let hermite = (p0, v0, p1, v1, t) => {
            const result = p0.clone().clone().multiplyScalar((2 * t * t * t) - (3 * t * t) + 1).clone().add(v0.clone().clone().multiplyScalar((t * t * t) - (2 * t * t) + t)).clone().add(p1.clone().clone().multiplyScalar((-2 * t * t * t) + (3 * t * t))).clone().add(v1.clone().clone().multiplyScalar((t * t * t) - (t * t)));
            return result;
        };
        //ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff);
        const lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        const clock = new three__WEBPACK_IMPORTED_MODULE_1__.Clock();
        let t = 0;
        let seg = 0;
        let seg2 = points[0].clone();
        let update = (time) => {
            t += clock.getDelta();
            if (t > 1.0) {
                t -= 1.0;
                if (seg >= points.length - 2) {
                    seg = 0;
                }
                else {
                    seg++;
                }
            }
            const pos = hermite(points[seg].clone(), vectors[seg].clone(), points[seg + 1].clone(), vectors[seg + 1].clone(), t);
            let a = pos.clone().clone().sub(seg2).clone().normalize();
            let target = pos.clone().clone().add(a);
            cargroup.lookAt(target);
            cargroup.rotateY(Math.PI / 2);
            seg2.copy(pos);
            cargroup.position.copy(pos);
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(50, 50, 50));
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_three_examples_jsm_controls_OrbitControls_js"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsQ0FBQzs7Ozs7OztVQzlRRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NncHJlbmRlcmluZy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLzIzRkkwNTkg6auY5qmL5p2x5bylXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tICdjYW5ub24tZXMnO1xuXG5jbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4gICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBUSFJFRS5Db2xvcigweDQ5NWVkKSk7XG4gICAgICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTsgLy/jgrfjg6Pjg4njgqbjg57jg4Pjg5fjgpLmnInlirnjgavjgZnjgotcblxuICAgICAgICAvL+OCq+ODoeODqeOBruioreWumlxuICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xuICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuICAgICAgICBjb25zdCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jHJlbmRlclxuICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcbiAgICAgICAgY29uc3QgcmVuZGVyOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBvcmJpdENvbnRyb2xzLnVwZGF0ZSgpO1xuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJAo5YWo5L2T44GnMeWbnilcbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xudGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuY29uc3QgY2FyZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbmNvbnN0IHRyZWVncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXG4gIGNvbnN0IGJveGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDgsIDEsIDQpO1xuICBjb25zdCBib3htYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoKTtcbiAgY29uc3QgYm94bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJveGdlb21ldHJ5LCBib3htYXRlcmlhbCk7XG4gIGNhcmdyb3VwLmFkZChib3htZXNoKTtcblxuXG4gIGNvbnN0IHdoZWVsZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSk7XG4gIGNvbnN0IHdoZWVsbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKCk7XG4gIGNvbnN0IHdoZWVscG9zaXRpb25zID0gW1xuICAgIG5ldyBUSFJFRS5WZWN0b3IzKC0yLCAwLCAyLjUpLFxuICAgIG5ldyBUSFJFRS5WZWN0b3IzKC0yLCAwLCAtMi41KSxcbiAgICBuZXcgVEhSRUUuVmVjdG9yMygyLCAwLCAyLjUpLFxuICAgIG5ldyBUSFJFRS5WZWN0b3IzKDIsIDAsIC0yLjUpLFxuICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aGVlbHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHdoZWVsbWVzaCA9IG5ldyBUSFJFRS5NZXNoKHdoZWVsZ2VvbWV0cnksIHdoZWVsbWF0ZXJpYWwpO1xuICAgIFxuICBcbiAgICBjb25zdCB3cG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyh3aGVlbHBvc2l0aW9uc1tpXS54LCB3aGVlbHBvc2l0aW9uc1tpXS55LCB3aGVlbHBvc2l0aW9uc1tpXS56KTtcbiAgICB3aGVlbG1lc2gucG9zaXRpb24uY29weSh3cG9zaXRpb24pO1xuICAgIFxuICAgIGNhcmdyb3VwLmFkZCh3aGVlbG1lc2gpO1xufVxuXG4gICAgdGhpcy5zY2VuZS5hZGQoY2FyZ3JvdXApO1xuXG5cbmNvbnN0IHJwZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg1MCwgMTAwKTtcbmNvbnN0IHJwbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHgyMjhCMjIgfSk7XG5jb25zdCBycG1lc2ggPSBuZXcgVEhSRUUuTWVzaChycGdlb21ldHJ5LCBycG1hdGVyaWFsKTtcbnJwbWVzaC5tYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcbnJwbWVzaC5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG5ycG1lc2gucG9zaXRpb24ueCA9IDMwOyBcbnRoaXMuc2NlbmUuYWRkKHJwbWVzaCk7XG5cblxuY29uc3QgbHBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDUwLCAxMDApO1xuY29uc3QgbHBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDIyOEIyMiB9KTsgXG5jb25zdCBscG1lc2ggPSBuZXcgVEhSRUUuTWVzaChscGdlb21ldHJ5LCBscG1hdGVyaWFsKTtcbmxwbWVzaC5tYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcbmxwbWVzaC5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG5scG1lc2gucG9zaXRpb24ueCA9IC0zMDtcbnRoaXMuc2NlbmUuYWRkKGxwbWVzaCk7XG5cblxuY29uc3QgbHJnZW9tZXRyeTEgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMzAsIDAuMSwgMTApOyBcbmNvbnN0IGxybWF0ZXJpYWwxID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ODA4MDgwIH0pOyBcbmNvbnN0IGxybWVzaDEgPSBuZXcgVEhSRUUuTWVzaChscmdlb21ldHJ5MSwgbHJtYXRlcmlhbDEpO1xubHJtZXNoMS5wb3NpdGlvbi5zZXQoLTQwLCAwLjA1LCA0NSk7IFxudGhpcy5zY2VuZS5hZGQobHJtZXNoMSk7XG5cbmNvbnN0IGxyZ2VvbWV0cnkyID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDUwLCAwLjEsIDEwKTsgXG5jb25zdCBscm1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDgwODA4MCB9KTsgXG5jb25zdCBscm1lc2gyID0gbmV3IFRIUkVFLk1lc2gobHJnZW9tZXRyeTIsIGxybWF0ZXJpYWwyKTtcbmxybWVzaDIucG9zaXRpb24uc2V0KC0zMCwgMC4wNSwgMjUpOyBcbmxybWVzaDIucm90YXRpb24ueSA9IE1hdGguUEkgLyAyOyBcbnRoaXMuc2NlbmUuYWRkKGxybWVzaDIpO1xuXG5cbmNvbnN0IGxyZ2VvbWV0cnkzID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMwLCAwLjEsIDEwKTsgXG5jb25zdCBscm1hdGVyaWFsMyA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDgwODA4MCB9KTsgXG5jb25zdCBscm1lc2gzID0gbmV3IFRIUkVFLk1lc2gobHJnZW9tZXRyeTMsIGxybWF0ZXJpYWwzKTtcbmxybWVzaDMucG9zaXRpb24uc2V0KC0yMCwgMC4wNSwgMCk7IFxubHJtZXNoMy5yb3RhdGlvbi55ID0gLU1hdGguUEkgOyBcbnRoaXMuc2NlbmUuYWRkKGxybWVzaDMpO1xuXG5cbmNvbnN0IHJyZ2VvbWV0cnkxID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMwLCAwLjEsIDEwKTsgXG5jb25zdCBycm1hdGVyaWFsMT0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ODA4MDgwIH0pO1xuY29uc3QgcnJtZXNoMSA9IG5ldyBUSFJFRS5NZXNoKHJyZ2VvbWV0cnkxLCBycm1hdGVyaWFsMSk7XG5ycm1lc2gxLnBvc2l0aW9uLnNldCgyMCwgMC4wNSwgMCk7IFxudGhpcy5zY2VuZS5hZGQocnJtZXNoMSk7XG5cbmNvbnN0IHJyZ2VvbWV0cnkyID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDUwLCAwLjEsIDEwKTtcbmNvbnN0IHJybWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ODA4MDgwIH0pO1xuY29uc3QgcnJtZXNoMiA9IG5ldyBUSFJFRS5NZXNoKHJyZ2VvbWV0cnkyLCBycm1hdGVyaWFsMik7XG5ycm1lc2gyLnBvc2l0aW9uLnNldCgzMCwgMC4wNSwgLTIwKTsgXG5ycm1lc2gyLnJvdGF0aW9uLnkgPSAtTWF0aC5QSS8yIDsgXG50aGlzLnNjZW5lLmFkZChycm1lc2gyKTtcblxuY29uc3QgcnJnZW9tZXRyeTMgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMzAsIDAuMSwgMTApOyBcbmNvbnN0IHJybWF0ZXJpYWwzID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ODA4MDgwIH0pO1xuY29uc3QgcnJtZXNoMyA9IG5ldyBUSFJFRS5NZXNoKHJyZ2VvbWV0cnkzLCBycm1hdGVyaWFsMyk7XG5ycm1lc2gzLnBvc2l0aW9uLnNldCg0MCwgMC4wNSwgLTQ1KTsgXG50aGlzLnNjZW5lLmFkZChycm1lc2gzKTtcblxuXG5cblxuXG4gIFxuICAgIGNvbnN0IHRyZWVnZW9tZXRyeTEgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSg1LCA1LCAzMCk7XG4gICAgY29uc3QgdHJlZW1hdGVyaWFsMSA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDhCNDUxMyB9KTsgXG4gICAgY29uc3QgdHJlZW1lc2gxID0gbmV3IFRIUkVFLk1lc2godHJlZWdlb21ldHJ5MSwgdHJlZW1hdGVyaWFsMSk7XG4gICAgdHJlZW1lc2gxLnBvc2l0aW9uLnkgPSAxNTsgXG4gICAgdHJlZWdyb3VwLmFkZCh0cmVlbWVzaDEpO1xuXG4gICAgXG4gICAgY29uc3QgdHJlZWdlb21ldHJ5MiA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxNSwgMTYsIDE2KTtcbiAgICBjb25zdCB0cmVlbWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MjI4QjIyIH0pOyBcbiAgICBjb25zdCB0cmVlbWVzaDIgPSBuZXcgVEhSRUUuTWVzaCh0cmVlZ2VvbWV0cnkyLCB0cmVlbWF0ZXJpYWwyKTtcbiAgICB0cmVlbWVzaDIucG9zaXRpb24ueSA9IDMyOyBcbiAgICB0cmVlZ3JvdXAuYWRkKHRyZWVtZXNoMik7XG5cbiBcbiAgICB0cmVlZ3JvdXAucG9zaXRpb24uc2V0KDMwLCAwLCAtMjApO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodHJlZWdyb3VwKTtcblxuXG5jb25zdCB0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxMCwgMTAsIDIwLCAzMiwgMSwgdHJ1ZSwgMCwgTWF0aC5QSSk7XG5jb25zdCB0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHg0NDQ0NDQsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSk7XG5jb25zdCB0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRnZW9tZXRyeSwgdG1hdGVyaWFsKTtcblxuXG50bWVzaC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7IFxudG1lc2gucm90YXRpb24ueSA9IE1hdGguUEkgLyAyOyBcbnRtZXNoLnBvc2l0aW9uLnNldCgtMzAsIDAsIDI1KTsgXG5cbnRoaXMuc2NlbmUuYWRkKHRtZXNoKTtcblxuY29uc3QgcG9pbnRzOiBUSFJFRS5WZWN0b3IzW10gPSBbXG4gIG5ldyBUSFJFRS5WZWN0b3IzKC01MCwgMSwgNDUpLCBcbiAgbmV3IFRIUkVFLlZlY3RvcjMoLTMwLCAxLCA0MCksIFxuICBuZXcgVEhSRUUuVmVjdG9yMygtMzAsIDEsIDUpLFxuXG4gbmV3IFRIUkVFLlZlY3RvcjMoMCwgNSwgMCksXG5cbiAgXG4gIG5ldyBUSFJFRS5WZWN0b3IzKDI1LCAxLCAwKSwgIFxubmV3IFRIUkVFLlZlY3RvcjMoMjAsIDEsIC0zMCksXG4gIG5ldyBUSFJFRS5WZWN0b3IzKDMwLCAxLCAtNDApLFxuXG4gIFxuICBuZXcgVEhSRUUuVmVjdG9yMyg1MCwgMSwgLTQ1KSxcblxuICBcbl07XG5cblxuY29uc3QgdmVjdG9yczogVEhSRUUuVmVjdG9yM1tdID0gW1xuIG5ldyBUSFJFRS5WZWN0b3IzKDQwLCAwLCAtNSksICAgXG4gIG5ldyBUSFJFRS5WZWN0b3IzKDIwLCAwLCAtMjUpLCAgXG4gIG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAwLCAtMjApLCAgXG4gICBuZXcgVEhSRUUuVmVjdG9yMygwLDEwLCAwKSwgIFxuICBuZXcgVEhSRUUuVmVjdG9yMygxMCwgMCwgLTIwKSwgICBcblxuICAgbmV3IFRIUkVFLlZlY3RvcjMoMjAsIDAsIC0yMCksICAgIFxuICBuZXcgVEhSRUUuVmVjdG9yMygxMCwgMCwgLTI1KSwgIFxuICBuZXcgVEhSRUUuVmVjdG9yMyg0MCwgMCwgLTUpICAgXG5dO1xuXG5cbmxldCBoZXJtaXRlID0gKHAwOiBUSFJFRS5WZWN0b3IzLCB2MDogVEhSRUUuVmVjdG9yMywgXG4gICAgICAgICAgICAgICBwMTogVEhSRUUuVmVjdG9yMywgdjE6IFRIUkVFLlZlY3RvcjMsIHQ6IG51bWJlcik6IFRIUkVFLlZlY3RvcjMgPT4ge1xuIGNvbnN0IHJlc3VsdCA9cDAuY2xvbmUoKS5tdWx0aXBseVNjYWxhcigoMiAqIHQgKiB0ICogdCkgLSAoMyAqIHQgKiB0KSArIDEpXG4gICAgLmFkZCh2MC5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKCh0ICogdCAqIHQpIC0gKDIgKiB0ICogdCkgKyB0KSlcbiAgICAuYWRkKHAxLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoKC0yICogdCAqIHQgKiB0KSArICgzICogdCAqIHQpKSlcbiAgICAuYWRkKHYxLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoKHQgKiB0ICogdCkgLSAodCAqIHQpKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4gICAgICAgIC8v44Op44Kk44OI44Gu6Kit5a6aXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICAgIGNvbnN0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG5jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xubGV0IHQgPSAwO1xubGV0IHNlZyA9IDA7XG5sZXQgc2VnMiA9IHBvaW50c1swXS5jbG9uZSgpO1xuXG5sZXQgdXBkYXRlOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4gICAgdCArPSBjbG9jay5nZXREZWx0YSgpO1xuXG4gICAgaWYgKHQgPiAxLjApIHtcbiAgICAgICAgdCAtPSAxLjA7XG4gICAgICAgIGlmIChzZWcgPj0gcG9pbnRzLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgIHNlZyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWcrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvcyA9IGhlcm1pdGUoIHBvaW50c1tzZWddLmNsb25lKCksIHZlY3RvcnNbc2VnXS5jbG9uZSgpLCBwb2ludHNbc2VnICsgMV0uY2xvbmUoKSwgdmVjdG9yc1tzZWcgKyAxXS5jbG9uZSgpLCB0ICk7XG5cblxuICAgIGxldCBhID0gcG9zLmNsb25lKCkuc3ViKHNlZzIpLm5vcm1hbGl6ZSgpO1xuICAgIGxldCB0YXJnZXQgPSBwb3MuY2xvbmUoKS5hZGQoYSk7XG5cbiAgICBjYXJncm91cC5sb29rQXQodGFyZ2V0KTsgXG4gICAgY2FyZ3JvdXAucm90YXRlWShNYXRoLlBJIC8gMik7IFxuICAgIHNlZzIuY29weShwb3MpOyBcbiAgICBjYXJncm91cC5wb3NpdGlvbi5jb3B5KHBvcyk7IFxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG59O1xuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcblxufVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDUwLDUwLCA1MCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmlld3BvcnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjZ3ByZW5kZXJpbmdcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2dwcmVuZGVyaW5nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc190aHJlZV9leGFtcGxlc19qc21fY29udHJvbHNfT3JiaXRDb250cm9sc19qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==