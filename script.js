  
function hideNote() { 
    // annotation: #path-1, #text-1, #path-2, #text-2
    d3.select("#g-nft-version3-Artboard_1-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-frames-img").classed('hidden', true)
    d3.select("#-nft-version3-Artboard_1-frames2-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-men-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-women-img").classed('hidden', true)

    d3.select("#g-nft-version3-Artboard_1-unknown-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-collective-img").classed('hidden', true)

    d3.select("#g-nft-version3-Artboard_1-paintings-men-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-paintings-women-img").classed('hidden', true)

    d3.select("#g-ai0-1").classed('hidden', false)
    d3.select("#g-ai0-2").classed('hidden', false)

  }
  
   /* Scrollytelling code goes under here */
   hideNote()

   d3.select("#step-one").on('stepout', function(e) {
    if(e.detail.direction === 'up') {
      // undo the changes from step one
      hideNote()
    }
  })

  d3.select("#step-one").on('stepin', function(e) {
    console.log("Got to step one")

    

    // do changes for step one
    d3.select("#g-nft-version3-Artboard_1-frames-img").classed('hidden', true)
    d3.select("#-nft-version3-Artboard_1-frames2-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-men-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-women-img").classed('hidden', true)

    d3.select("#g-nft-version3-Artboard_1-unknown-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-collective-img").classed('hidden', true)


    d3.select("#g-nft-version3-Artboard_1-paintings-men-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-paintings-women-img").classed('hidden', false)

    
  })

  d3.select("#step-two").on('stepin', function(e) {
    console.log("Got to step two")

    

    // do changes for step one
    d3.select("#g-nft-version3-Artboard_1-frames-img").classed('hidden', true)
    d3.select("#-nft-version3-Artboard_1-frames2-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-men-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-women-img").classed('hidden', true)

    d3.select("#g-nft-version3-Artboard_1-paintings-men-img").classed('hidden', false)
    d3.select("#g-nft-version3-Artboard_1-paintings-women-img").classed('hidden', false)

    
  })

  d3.select("#step-three").on('stepin', function(e) {
    console.log("Got to step two")

    

    // do changes for step one
    d3.select("#g-nft-version3-Artboard_1-frames-img").classed('hidden', true)
    d3.select("#-nft-version3-Artboard_1-frames2-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-men-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-women-img").classed('hidden', true)

    d3.select("#g-nft-version3-Artboard_1-paintings-men-img").classed('hidden', false)
    d3.select("#g-nft-version3-Artboard_1-paintings-women-img").classed('hidden', false)

    
  })

  d3.select("#step-four").on('stepin', function(e) {
    console.log("Got to step two")

    

    // do changes for step one
    d3.select("#g-nft-version3-Artboard_1-frames-img").classed('hidden', true)
    d3.select("#-nft-version3-Artboard_1-frames2-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-men-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-women-img").classed('hidden', false)

    d3.select("#g-nft-version3-Artboard_1-paintings-men-img").classed('hidden', false)
    d3.select("#g-nft-version3-Artboard_1-paintings-women-img").classed('hidden', false)

    d3.select("#g-nft-version3-Artboard_1-unknown-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-collective-img").classed('hidden', true)


    
  })

  d3.select("#step-five").on('stepin', function(e) {
    console.log("Got to step two")

    

    // do changes for step one
    d3.select("#g-nft-version3-Artboard_1-frames-img").classed('hidden', true)
    d3.select("#-nft-version3-Artboard_1-frames2-img").classed('hidden', true)
    d3.select("#g-nft-version3-Artboard_1-nft-men-img").classed('hidden', false)
    d3.select("#g-nft-version3-Artboard_1-nft-women-img").classed('hidden', false)

    d3.select("#g-nft-version3-Artboard_1-paintings-men-img").classed('hidden', false)
    d3.select("#g-nft-version3-Artboard_1-paintings-women-img").classed('hidden', false)

    d3.select("#g-nft-version3-Artboard_1-unknown-img").classed('hidden', false)
    d3.select("#g-nft-version3-Artboard_1-collective-img").classed('hidden', false)

    
  })

  const scroller = scrollama();

scroller
  .setup({
    step: "#scrolly .scrolly-overlay .step",
    offset: 0.75,
    debug: false
  })
  .onStepEnter(function({ element, index, direction}) {
    const event = new CustomEvent('stepin', { detail: { direction: direction } })
    element.dispatchEvent(event);
  })
  .onStepExit(function({ element, index, direction }) {
    const event = new CustomEvent('stepout', { detail: { direction: direction } })
    element.dispatchEvent(event);
  });

window.addEventListener("resize", scroller.resize);



(function() {
    // only want one resizer on the page
    if (document.documentElement.className.indexOf("g-resizer-v3-init") > -1) return;
    document.documentElement.className += " g-resizer-v3-init";
    // require IE9+
    if (!("querySelector" in document)) return;
    function resizer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll(".g-artboard[data-min-width]")),
            widthById = {};
        elements.forEach(function(el) {
            var parent = el.parentNode,
                width = widthById[parent.id] || parent.getBoundingClientRect().width,
                minwidth = el.getAttribute("data-min-width"),
                maxwidth = el.getAttribute("data-max-width");
            widthById[parent.id] = width;

            if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
        try {
            if (window.parent && window.parent.$) {
                window.parent.$("body").trigger("resizedcontent", [window]);
            }
            if (window.require) {
                require(['foundation/main'], function() {
                    require(['shared/interactive/instances/app-communicator'], function(AppCommunicator) {
                        AppCommunicator.triggerResize();
                    });
                });
            }
        } catch(e) { console.log(e); }
    }

    document.addEventListener('DOMContentLoaded', resizer);
    // feel free to replace throttle with _.throttle, if available
    window.addEventListener('resize', throttle(resizer, 200));

    function throttle(func, wait) {
        // from underscore.js
        var _now = Date.now || function() { return new Date().getTime(); },
            context, args, result, timeout = null, previous = 0;
        var later = function() {
            previous = _now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = _now(), remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }


})();





