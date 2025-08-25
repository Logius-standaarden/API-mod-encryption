# Introduction

This module specifies the use of JWE for HTTP payload encryption.

## Use Cases

This module is applicable when there is a need for end to end message payload confidentiality between client application and server application.
In a complex IT landscape the path between client and server can go over several intermediary components/systems in which case end to end confidentiality can be especially relevant. (In this case TLS is terminated in each step on the path and does not protect the http-message in transport fully end to end).
A specific example is when there is confidential data that is processed and routed by an intermediary organization which is not allowed to access the contents of the message.
