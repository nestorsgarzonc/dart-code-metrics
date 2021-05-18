class SomeWidget extends StatelessWidget {
  @override
  Widget build() {}

  // LINT
  Widget get widgetGetter => Container();

  String get stringGetter => '';

  // LINT
  Widget _getMyShinyWidget() {
    return Container();
  }

  String _getString() {
    return '';
  }

  // LINT
  Container _getContainer() {
    return Container();
  }

  // LINT
  Iterable<Widget> _getWidgetsIterable() => [Container()];

  Iterable<String> _getWidgetsIterable() => ['string'];

  // LINT
  List<Widget> _getWidgetsList() => [Container()].toList();

  List<String> _getStringsList() => ['string'].toList();

  // LINT
  Future<Widget> _getWidgetFuture() => Future.value(Container());

  Future<String> _otherStringFuture() => Future.value('');
}

// LINT
Widget _getWidget() => Container();

String _getString() => '';

@FunctionalWidget
Widget _getFunctionalWidget() => Container();

@swidget
Widget _getStatelessFunctionalWidget() => Container();

@hwidget
Widget _getHookFunctionalWidget() => Container();

// LINT
@ignoredAnnotation
Widget _getWidgetWithIgnoredAnnotation() => Container();

class Widget {}

class Container extends Widget {}

class FunctionalWidget {
  const FunctionalWidget();
}

const swidget = FunctionalWidget();
const hwidget = FunctionalWidget();

class IgnoredAnnotation {
  const IgnoredAnnotation();
}
