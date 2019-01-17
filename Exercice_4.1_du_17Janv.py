class CourbeElliptique:

    def __init__(self, a, b , point):

        self.a = a
        self.b = b
        self.point = point


    def __eq__(self, courbe):

        return (self.a, self.b) == (courbe.a, courbe.b)




