import sys
import time
import json

from PyQt5 import QtCore, QtWidgets


class TextHandler():

    start = None

    def text_changed(self):

        now = time.perf_counter()
        if self.start is None:

            t = 0

        else:

            t = now - self.start

        self.start = now
        data = dict(data=w.toPlainText(), time=t)
        actions.append(data)


if __name__ == "__main__":

    actions = []

    app = QtWidgets.QApplication(sys.argv)
    w = QtWidgets.QPlainTextEdit()
    handler = TextHandler()
    w.textChanged.connect(handler.text_changed)
    w.show()

    start = time.perf_counter()
    app.exec_()

    with open("actions.json", "w") as fout:

        json.dump(actions, fout, indent=4)
