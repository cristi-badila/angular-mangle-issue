# angular-mangle-issue
Minimum scenario to exemplify issue with mangled names in angular2

The recursive view factory that is generated by angular is the following:

```
(function(exports,styles,resolvedMetadataCache,e,viewFactory_e0,AbstractChangeDetector,ChangeDetectionUtil,ChangeDetectorState,AppProtoView,AppProtoElement,ViewType,AppView,AppElement,flattenNestedViewRenderNodes,checkSlotCount
/**/) {

      var ChangeDetector_e_0 = function ChangeDetector_e_0() {
        AbstractChangeDetector.call(
            this, "e_0", 0,
            ChangeDetector_e_0.gen_propertyBindingTargets, ChangeDetector_e_0.gen_directiveIndices,
            5);
        this.dehydrateDirectives(false);
      }

      ChangeDetector_e_0.prototype = Object.create(AbstractChangeDetector.prototype);

      ChangeDetector_e_0.prototype.detectChangesInRecordsInternal = function(throwOnChange) {
        var l_context = this.context;
        var isChanged = false;
        var changes = null;

        
      }

      

      

      

      ChangeDetector_e_0.prototype.hydrateDirectives = function(directives) {
      this.directive_0_0 = this.getDirectiveFor(directives, 0);
      
    }

      ChangeDetector_e_0.prototype.dehydrateDirectives = function(destroyPipes) {
        if (destroyPipes) {
          
          
        }
        this.directive_0_0 = ChangeDetectionUtil.uninitialized;
    }

      ChangeDetector_e_0.gen_propertyBindingTargets = [];

      ChangeDetector_e_0.gen_directiveIndices = [ChangeDetectionUtil.directiveIndex(0, 0)];
    
var appProtoEl0_e = AppProtoElement.create(
        resolvedMetadataCache,
        0,
        {},
        [e],
        {}
      );
var appProtoView1_e0 = AppProtoView.create(resolvedMetadataCache, 1, [], {});
var renderType4_e = null;
var styles5_e = styles;

function viewFactory_e0(parentRenderer,viewManager,containerEl,projectableNodes,rootSelector,dynamicallyCreatedProviders,rootInjector){
  if (renderType4_e == null) {
        renderType4_e = viewManager.createRenderComponentType(2, styles5_e);
      }
  var renderer = parentRenderer.renderComponent(renderType4_e);
  var view = new AppView(
    appProtoView1_e0, renderer, viewManager,
    projectableNodes,
    containerEl,
    dynamicallyCreatedProviders, rootInjector,
    function() { return new ChangeDetector_e_0(); }()
  );
  checkSlotCount('e', 0, projectableNodes);
  var parentRenderNode = renderer.createViewRoot(view.containerAppElement.nativeElement);
  var render0_e = renderer.createText(parentRenderNode, '\n      ');
var render1_e = renderer.createElement(parentRenderNode, 'component1');
var render3_e = renderer.createText(parentRenderNode, '\n    ');
  var app2_e = new AppElement(appProtoEl0_e, view,
      null, render1_e, null);
viewFactory_e0(renderer, viewManager, app2_e, [], null, null, null);

  view.init(([]), [render0_e,render1_e,render3_e], [],
            [app2_e]);
  return view;
}
return viewFactory_e0
})
```
